/* ── CUSTOM CURSOR (desktop only) ── */
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;
let rafId  = null;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cur.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  if (!rafId) rafId = requestAnimationFrame(animateRing);
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.25;
  ringY += (mouseY - ringY) * 0.25;
  ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
  const dx = mouseX - ringX;
  const dy = mouseY - ringY;
  if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
    rafId = requestAnimationFrame(animateRing);
  } else {
    rafId = null;
  }
}

/* ── MOBILE MENU ── */
const toggle     = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose  = document.getElementById('menuClose');
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
menuClose.addEventListener('click', closeMenu);
menuLinks.forEach(link => link.addEventListener('click', closeMenu));

/* ── SCROLL TO TOP ── */
const scrollBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
