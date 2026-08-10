const menuToggle = document.querySelector('.navbar__toggle');
const navMenu = document.querySelector('.navbar__menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});