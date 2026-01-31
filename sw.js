const CACHE_NAME = 'treequest-v6';
const ASSETS_TO_CACHE = [
  '/index.html',
  '/manifest.json',
  '/database.js',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
  '/images/parques/sensal.jpg',
  '/images/parques/ribalta.jpg',
  '/images/parques/pinar.jpg',
  '/images/parques/litoral.jpg',
  '/images/parques/royo.jpg',
  '/images/parques/auditorio.jpg',
  '/images/parques/comunicaciones.jpg',
  '/images/parques/merida.jpg',
  '/images/parques/meridiano.jpg',
  '/images/parques/panderola.jpg',
  '/images/parques/rafalafena.jpg'
];

// CDNs permitidos para cachear
const ALLOWED_ORIGINS = [
  'https://unpkg.com',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net',
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://upload.wikimedia.org',
  'https://images.unsplash.com'
];

// Instalación: cachear recursos esenciales
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activación: limpiar cachés antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: estrategia Network First con fallback a cache
self.addEventListener('fetch', event => {
  // Solo cachear peticiones GET
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Verificar si es un origen permitido para cachear
  const isAllowedOrigin = url.origin === location.origin ||
                          ALLOWED_ORIGINS.some(origin => url.href.startsWith(origin));

  // No cachear llamadas a APIs externas no permitidas
  if (!isAllowedOrigin) return;

  // No cachear tiles de OpenStreetMap (ya tienen su propio cache)
  if (url.href.includes('tile.openstreetmap.org')) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Guardar copia en cache
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Si falla la red, buscar en cache
        return caches.match(event.request);
      })
  );
});
