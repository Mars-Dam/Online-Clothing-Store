// Smooth scroll and dynamic footer year update

const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
const currentYear = document.getElementById('currentYear');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

ctaButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const targetId = button.getAttribute('href');

    if (targetId && targetId.startsWith('#')) {
      event.preventDefault();
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetSection.setAttribute('tabindex', '-1');
        targetSection.focus({ preventScroll: true });
      }
    }
  });
});

// Add a subtle reveal animation for skill cards on scroll
const skillCards = document.querySelectorAll('.skill-card');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

skillCards.forEach((card) => revealObserver.observe(card));
