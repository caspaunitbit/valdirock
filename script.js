// Navbar scroll effect (solo su homepage con hero)
const navbar = document.getElementById('navbar');
if (!navbar.classList.contains('scrolled')) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// Mobile burger menu + backdrop
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const backdrop = document.getElementById('nav-backdrop');

function openMenu() {
  burger.classList.add('active');
  navLinks.classList.add('open');
  backdrop.classList.add('open');
  // blocca scroll su desktop e iOS
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
}

function closeMenu() {
  burger.classList.remove('active');
  navLinks.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
}

burger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

backdrop.addEventListener('click', closeMenu);

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.about-card, .event-card, .tariffa, .info-block');
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  const formNote = document.getElementById('formNote');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Invio in corso...';
    btn.disabled = true;
    setTimeout(() => {
      formNote.textContent = '✓ Messaggio inviato! Ti risponderemo al più presto.';
      formNote.className = 'form-note success';
      form.reset();
      btn.textContent = 'Invia messaggio';
      btn.disabled = false;
    }, 1200);
  });
}
