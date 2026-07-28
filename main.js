// 3D Card Tilt Effect
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `perspective(1000px) rotateX(${-y / 15}deg) rotateY(${x / 15}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
});

// Scroll-Triggered Skill Bar Fill
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.progress').forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
    }
  });
}, { threshold: 0.5 });

const skillsSection = document.getElementById('skills');
if (skillsSection) observer.observe(skillsSection);

// Mobile Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Auto-close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
});