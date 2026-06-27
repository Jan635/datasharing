// Nav toggle (mobile)
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 40
    ? 'rgba(244,247,250,0.98)'
    : 'rgba(244,247,250,0.94)';
}, { passive: true });

// Intersection observer for fade-up animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll(
  '.service-card, .team-card, .principle, .stat, .contact-left, .contact-right, .section-headline, .section-text'
).forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${(i % 3) * 0.1}s`;
  observer.observe(el);
});

// Contact form — mailto fallback (no backend required)
const form = document.getElementById('contactForm');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const org = data.get('org');
  const email = data.get('email');
  const message = data.get('message');

  const subject = encodeURIComponent(`Anfrage von ${name}${org ? ' (' + org + ')' : ''}`);
  const body = encodeURIComponent(
    `Name: ${name}\nOrganisation: ${org || '–'}\nE-Mail: ${email}\n\n${message}`
  );

  window.location.href = `mailto:j.wiegmann@hotmail.com?subject=${subject}&body=${body}`;

  // Show success message after short delay
  setTimeout(() => {
    form.style.display = 'none';
    const success = document.createElement('div');
    success.className = 'form-success visible';
    success.innerHTML = `
      <h4>Vielen Dank.</h4>
      <p>Ihre Nachricht wurde vorbereitet. Bitte senden Sie die geöffnete E-Mail ab,<br />um Ihre Anfrage zu übermitteln.</p>
    `;
    form.parentNode.appendChild(success);
  }, 800);
});
