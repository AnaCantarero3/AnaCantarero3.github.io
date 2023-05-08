document.addEventListener('DOMContentLoaded', () => {
// Animación de desplazamiento suave cambiar . por #
document.querySelectorAll('a[href^="."]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      });
      });

// Funcionalidad para la barra de navegación móvil
      const navToggle = document.querySelector('.nav-toggle');
      const navMenu = document.querySelector('.nav-menu');
      if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      });
    }
      
// Cambiar clase activa en la barra de navegación al desplazarse por la página
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav a');
      
      
      window.addEventListener('scroll', () => {
      const current = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - section.offsetHeight * 0.25) - 1;
      
      navLinks.forEach((link, index) => {
      if (index === current) {
      link.classList.add('active');
      } else {
      link.classList.remove('active');
      }
      });
      });
    });