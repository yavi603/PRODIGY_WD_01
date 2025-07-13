document.getElementById('menu-icon').onclick = function () {
  document.getElementById('nav-links').classList.toggle('show');
};

// Change navbar style on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});