const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu-link');
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const OFFSET = 100;

window.addEventListener('scroll', () => {
  let currentSectionId = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionId = section.getAttribute('id');

    if (
      rect.top <= headerHeight + OFFSET &&
      rect.bottom > headerHeight + OFFSET
    ) {
      currentSectionId = sectionId;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');

    if (href === currentSectionId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
