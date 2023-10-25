self.addEventListener("install", e =>{
   e.waitUntil(
    caches.open("static").then(cache =>{
        return cache.addAll([ "/index.html", "/style.css", "/logo_xoco/maskable_icon.png"]);
    })
   );
} );
self.addEventListener("fetch", e =>{
     console.log (`Intercepting fetch request for: $ {e.request.url}`)
} )