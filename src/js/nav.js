const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu-link');
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  let currentSectionId = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= headerHeight && rect.bottom > headerHeight) {
      currentSectionId = section.getAttribute('id');
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
