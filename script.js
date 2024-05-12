// Animación de botones de enlace en el header
const enlaces = document.querySelectorAll('header nav ul li a');

enlaces.forEach(enlace => {
  enlace.addEventListener('mouseover', () => {
    enlace.style.transform = 'scale(1.1)';
  });
  
  enlace.addEventListener('mouseout', () => {
    enlace.style.transform = 'scale(1)';
  });
});
