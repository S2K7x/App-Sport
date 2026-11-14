// Vérifie index.html après une modification du programme.
//   node scripts/check-app.js
// 1. Syntaxe du script principal (une apostrophe non échappée casse toute l'app).
// 2. Si Playwright est disponible : charge l'app et liste, pour chaque exercice,
//    ce que parseSets en déduit (nombre de séries, unité, repos) et les drills.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const file = path.resolve(__dirname, '..', 'index.html');
const html = fs.readFileSync(file, 'utf8');

const scripts = [...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const main = scripts.sort((a, b) => b.length - a.length)[0];
try {
  new vm.Script(main, { filename: 'index.html <script>' });
  console.log('Syntaxe : OK');
} catch (e) {
  console.error('Syntaxe : ERREUR —', e.message);
  console.error(e.stack.split('\n').slice(0, 4).join('\n'));
  process.exit(1);
}

let chromium;
try {
  ({ chromium } = require('playwright'));
} catch (e) {
  console.log('Playwright absent : vérification du rendu ignorée.');
  process.exit(0);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('file://' + file);
  await page.waitForTimeout(800);
  const out = await page.evaluate(() => {
    const r = {};
    for (const k of Object.keys(sessions)) {
      r[k] = sessions[k].exercises.map(ex => {
        const ps = parseSets(ex.sets, ex.note);
        const missing = ex.drills ? ex.drills.filter(d => !d || !d.n).length : 0;
        return `${ex.name} | ${ex.sets} -> ${ps.count} x ${ps.type}, repos ${ps.rest} s`
          + (ex.drills ? ` | ${ex.drills.length} drills${missing ? `, ${missing} MANQUANT(S)` : ''}` : '');
      });
    }
    r.macros = macroTargets();
    return r;
  });
  await browser.close();
  console.log(JSON.stringify(out, null, 1));
  const missing = JSON.stringify(out).includes('MANQUANT');
  console.log('Erreurs de page :', errors.length ? errors : 'aucune');
  process.exit(errors.length || missing ? 1 : 0);
})();
