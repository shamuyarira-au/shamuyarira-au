/* ── CUSTOM CURSOR (desktop only) ── */
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  cur.style.transform  = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});

/* ── MOBILE MENU ── */
const toggle     = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuLinks  = document.querySelectorAll('.menu-link');

function openMenu() {
  mobileMenu.style.display = 'flex';
  requestAnimationFrame(() => mobileMenu.classList.add('open'));
  toggle.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  toggle.classList.remove('open');
  document.body.style.overflow = '';
  mobileMenu.addEventListener('transitionend', () => {
    mobileMenu.style.display = 'none';
  }, { once: true });
}

toggle.addEventListener('click', () => {
  toggle.classList.contains('open') ? closeMenu() : openMenu();
});

// Close menu when a link is tapped
menuLinks.forEach(link => link.addEventListener('click', closeMenu));

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
