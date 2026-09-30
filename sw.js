/* PLANCHE OS — service worker
   Objectif : l'app doit s'ouvrir et fonctionner sans réseau (salle de sport,
   sous-sol, mode avion). Les données d'entraînement vivent dans localStorage,
   donc une fois le shell en cache l'app est pleinement utilisable hors ligne. */

const VERSION = 'planche-os-v5';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './icon2.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION)
      // addAll échoue en bloc si une seule ressource manque : on ajoute une par
      // une pour qu'une icône absente ne casse pas toute l'installation.
      .then(cache => Promise.all(SHELL.map(url => cache.add(url).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Navigation : réseau d'abord pour récupérer la dernière version du programme,
  // cache en secours. Un réseau faible (sous-sol, salle) ne doit pas bloquer
  // l'ouverture : au-delà de 3 s on sert la copie en cache, et la réponse
  // réseau, si elle finit par arriver, met quand même le cache à jour.
  if (req.mode === 'navigate') {
    const network = fetch(req).then(res => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put('./index.html', copy));
      }
      return res;
    });
    const cached = () => caches.match('./index.html').then(r => r || caches.match('./'));
    const timeout = new Promise(resolve => setTimeout(resolve, 3000)).then(cached);

    event.waitUntil(network.catch(() => null));
    event.respondWith(
      Promise.race([network, timeout])
        .then(res => res || network)
        .catch(() => cached().then(r => r || network))
    );
    return;
  }

  // Reste (icônes, polices) : cache d'abord, rafraîchi en arrière-plan.
  event.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req)
        .then(res => {
          if (res && res.status === 200 && (url.origin === self.location.origin || res.type === 'cors')) {
            const copy = res.clone();
            caches.open(VERSION).then(c => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
