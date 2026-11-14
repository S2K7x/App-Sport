# PLANCHE OS — guide pour Claude

Application web (PWA) de suivi d'entraînement de calisthénie, de course et de
nutrition pour un seul utilisateur. Tout est en français.

## À lire avant de travailler

| Fichier | Contenu |
|---|---|
| `MonAppTacking.md` | Le programme complet, expliqué, avec ses sources. Document de référence |
| `RECHERCHES.md` | Journal de tout ce qui a déjà été vérifié dans la littérature, avec le niveau de vérification, les pistes écartées, les notes de l'audit et les décisions prises |
| `index.html` | L'app. Les séances y sont écrites en texte (objet `sessions`) |

**Avant toute recherche web sur l'entraînement, la nutrition ou la
physiologie, lire `RECHERCHES.md`.** Si la réponse y est, ne pas refaire la
recherche. Si une nouvelle recherche est faite, l'ajouter à `RECHERCHES.md`
dans la même modification (source, ce qu'elle dit, niveau de vérification,
à quoi elle sert), y compris quand l'affirmation cherchée n'est pas confirmée.

## L'utilisateur et ses contraintes

- 23 ans, 1m70, environ 65 kg.
- Objectifs, dans l'ordre : full planche, handstand push-up, physique
  esthétique, puis un corps complet (endurance, puissance, souplesse, équilibre).
- S'entraîne **tous les jours à 7 h, au réveil, à jeun**, en extérieur à la
  Sportek du parc HaYarkon (Tel Aviv) : barres, barres parallèles, bancs.
- Matériel : **gilet lesté de 10 kg, anneaux, parallettes, élastiques**. Pas
  d'haltères, pas de barre, pas de banc incliné. Ne jamais prescrire un
  exercice qui en demande.
- **Shabbat (samedi) : repos complet, aucune séance, aucune course.** Seule
  une marche tranquille est prévue. Ne rien y ajouter.
- **Lundi et jeudi : jours de bureau.** Course à 7 h, pas de calisthénie.
- Chaleur l'été : les courses se calent sur l'effort perçu, pas sur l'allure.

## Règles sur les sources

- Uniquement des sources évaluées par des pairs : méta-analyses, revues
  systématiques, essais, prises de position ACSM / OMS / ISSN. Jamais de blog
  ni de site de vulgarisation comme source citée.
- Dire honnêtement ce qui est prouvé, ce qui est déduit et ce qui est un
  choix de programmation. Aucune étude ne porte sur l'entraînement de la
  planche : ne pas prétendre le contraire, ni promettre un « 10/10 prouvé ».
- Vérifier qu'une source dit bien ce qu'on lui fait dire avant de la citer
  (plusieurs citations héritées étaient fausses, voir `RECHERCHES.md`).
- `pubmed.ncbi.nlm.nih.gov` ne s'ouvre pas avec WebFetch (mur de cookies) :
  passer par la recherche web, PMC ou un dépôt universitaire.

## Modifier le programme

Les séances vivent dans l'objet `sessions` de `index.html` (clés `a`,
`cardio`, `b`, `c`, `cardio2`, `d`). L'app déduit tout du texte :

- `sets` est lu par `parseSets` : `'4 × 3-6 reps'` donne 4 lignes en reps,
  `'5 × 8-10 s'` des tenues en secondes, `'5-7 km'` ou `'10 min'` une durée.
  Pour `'A / B'` et `'A + B'` (variante, superset), seule la première partie
  compte. Un format comme `'4-5 × 1000 m'` n'est pas reconnu.
- Le repos est lu dans `note` : `Repos 90 s`, `Repos 2-3 min`.
- `drills: drills('wrists', …)` référence les clés de l'objet `DRILL`.
- Une séance par jour (`SESSION_META.dow`). Un bloc optionnel s'ajoute comme
  exercice dans une séance existante, pas comme séance supplémentaire.
- **L'historique est indexé par nom d'exercice** (`previousValues`). Renommer
  un exercice fait perdre l'affichage des valeurs précédentes : garder le nom
  quand l'exercice reste le même.
- Les chaînes sont entre apostrophes : toute apostrophe dans un texte doit
  être écrite `\'`. Une seule oubliée casse toute l'app.

À chaque changement de programme :

1. Modifier `index.html` (séances, conseils, textes de nutrition concernés).
2. Reporter le changement dans `MonAppTacking.md`.
3. Ajouter les sources nouvelles dans `RECHERCHES.md`.
4. Incrémenter `VERSION` dans `sw.js` (sinon le téléphone garde l'ancienne
   version en cache).
5. Lancer `node scripts/check-app.js` : syntaxe, lecture de chaque séance par
   `parseSets`, drills manquants, erreurs de page.

## Règles d'interface

- Aucune émoticône : les pictogrammes sont des SVG de l'objet `ICONS`.
- Aucune police distante ni ressource externe : l'app doit marcher hors ligne.
- Les données de l'utilisateur sont dans `localStorage` sur son téléphone :
  changer une valeur par défaut (poids, horaires de jeûne) ne modifie pas ce
  qu'il a déjà enregistré. Le lui signaler.

## Autres fichiers

`MonAppTacking.html`, `BackupAppTracking.html`, `AppCopineTracker.html` et
`App-sport-Codex/` sont d'anciennes versions ou des variantes. Ne pas les
modifier sauf demande explicite.

## Git

Travailler sur la branche indiquée par la session, pousser, ouvrir une pull
request en brouillon vers `main`. L'utilisateur fusionne lui-même.
