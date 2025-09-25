const CACHE_NAME = 'tpn-vpn-v1';
const urlsToCache = [
  '/',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/components/Header.jsx',
  '/src/components/Banner.jsx',
  '/src/components/OptionCard.jsx',
  '/src/components/Country.jsx',
  '/src/components/Service.jsx',
  '/src/components/Connection.jsx',
  '/src/components/Footer.jsx',
  '/src/styles/style.css',
  '/src/styles/responsive.css',
  '/src/styles/font.css',
  '/src/styles/fontawesome/css/all.css',
  '/images/other/tpn1.png',
  '/images/other/tpn2.png',
  '/images/banner/Connected world-bro.svg',
  '/images/country/iran.png',
  '/images/country/germany.png',
  '/images/country/russia.avif',
  '/images/country/turkey.png',
  '/images/country/united arab emirates.png',
  '/images/country/europe.png',
  '/images/social/icons8-telegram-100.png',
  '/images/social/icons8-instagram-100.png',
  '/images/social/icons8-discord-100.png',
  '/images/social/icons8-about-100.png'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
