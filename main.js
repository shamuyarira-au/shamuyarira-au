/* ── CUSTOM CURSOR ── */
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  cur.style.transform  = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});
