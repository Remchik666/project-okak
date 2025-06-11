const scrollToTopButton = document.querySelector('.scroll-to-top');
scrollToTopButton.addEventListener('click', () => {
    window.scroll({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});