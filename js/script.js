// Código adicional para manejar enlaces sin sección objetivo
function scrollToSection(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('No se encontró la sección con el ID:', targetId);
    }
  }
  
  // Seleccionar todos los enlaces de navegación
  const navLinks = document.querySelectorAll('nav a');
  
  // Agregar un event listener a cada enlace
  navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });