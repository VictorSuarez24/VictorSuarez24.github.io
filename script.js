document.addEventListener('DOMContentLoaded', function() {
  
  // --- MENÚ MÓVIL ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const bars = document.querySelectorAll('.bar');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      if (menuToggle.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
        bars[0].style.transform = 'rotate(0)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0)';
      }
    });
  }

  // Cerrar menú al hacer clic en enlace
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) menuToggle.click();
    });
  });

  // --- EFECTO NAVBAR SCROLL ---
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.padding = '0.5rem 0';
      navbar.style.backgroundColor = 'rgba(13, 17, 23, 0.98)';
    } else {
      navbar.style.padding = '1rem 0';
      navbar.style.backgroundColor = 'rgba(13, 17, 23, 0.95)';
    }
  });

  // --- EFECTO DE ESCRITURA (TYPEWRITER) ---
  const textElement = document.getElementById('typewriter');
  if (textElement) {
    const texts = [
      "Administrador de Sistemas", 
      "Experto en Ciberseguridad", 
      "Pentester en proceso...", 
      "Linux Lover"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }


      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; 
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    }
    
    type();
  }
});