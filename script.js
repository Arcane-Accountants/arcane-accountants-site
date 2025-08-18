// Tiny UX niceties only
document.getElementById("year").textContent = new Date().getFullYear().toString();

// Reduce video motion if user prefers reduced motion
const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
if (mq.matches) {
  const v = document.querySelector('.bg-video');
  if (v) v.remove();
}
