// Footer year
document.getElementById("year").textContent = new Date().getFullYear().toString();

// Respect reduced-motion
const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
if (mq.matches) {
  document.querySelectorAll('.bg-video').forEach(v => v.remove());
}

// Mobile menu toggle
(function(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));
})();

// Google Maps init (must be global for callback)
window.initArcaneMap = function() {
  // Exact coordinates for Level 25, 100 Mount Street, North Sydney
  const coords = { lat: -33.838901, lng: 151.208377 };

  const map = new google.maps.Map(document.getElementById("arcane-map"), {
    zoom: 15,
    center: coords,
    clickableIcons: false,
    mapTypeControl: false,
    streetViewControl: false,
    styles: [
      { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] },
      { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#3e606f" }, { "weight": 2 }, { "gamma": 0.84 }] },
      { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
      { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "weight": 0.6 }, { "color": "#1a3541" }] },
      { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#2c5a71" }] },
      { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#406d80" }] },
      { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#2c5a71" }] },
      { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#29768a" }, { "lightness": -37 }] },
      { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#406d80" }] },
      { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#193341" }] }
    ]
  });

  // Custom marker
  new google.maps.Marker({
    position: coords,
    map,
    title: "Arcane Accountants — Level 25, 100 Mount Street",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 8,
      fillColor: "#0ce5ff",
      fillOpacity: 1,
      strokeWeight: 2,
      strokeColor: "#ffffff"
    }
  });

  // Disable scroll zoom until user interacts
  map.setOptions({ scrollwheel: false });
  const card = document.querySelector("#location .map-card");
  if (card) {
    card.addEventListener("click", () => map.setOptions({ scrollwheel: true }), { passive: true });
    card.addEventListener("mouseleave", () => map.setOptions({ scrollwheel: false }), { passive: true });
    card.addEventListener("touchstart", () => map.setOptions({ scrollwheel: true }), { passive: true });
  }
};
