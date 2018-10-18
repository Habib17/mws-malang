self.addEventListener('install', function(event) {
  console.log('Service worker installing...');
  event.waitUntil(       
    caches.create('static-v2').then(
      function(cache) {          
        return cache.addAll(
              [
                'index.html',
                'css/mobile-map-box.css',
                'images/Calculator.png',
                'images/dart-board.png',
                'images/Maps.png',
                'images/prof.png',
                'project1/calculator.js',
                'project1/index.html',
                'project2/css/mobile-map-box.css',
                'project2/index.html',
                'js/sw.js',
                'json/manifest.json',
              ]
          );    
      }
    )
  ) 
});
self.addEventListener('activate', function(event) {
 console.log('Service worker activating...');
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});