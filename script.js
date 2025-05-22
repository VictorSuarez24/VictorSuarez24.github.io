
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Transform hamburger to X
      const bars = document.querySelectorAll('.bar');
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
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navMenu.classList.contains('active')) {
        menuToggle.click();
      }
    });
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.padding = '0.75rem 0';
      navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.padding = '1rem 0';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
  });
  
  // Active nav link based on scroll position
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-menu a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
      
      // Special case for home/top
      if (window.scrollY < 300 && !current) {
        navItems[0].classList.add('active');
      }
    });
  });
  
  // Form submission
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the data to a server
      // For demonstration, we'll just log it and show an alert
      console.log('Form submitted:', { name, email, message });
      
      alert('Mensaje enviado correctamente. ¡Gracias por contactarme!');
      contactForm.reset();
    });
  }
});
