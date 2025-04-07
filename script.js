// Mobile menu toggle functionality - SINGLE VERSION (remove duplicates)
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-centered');
    
    if (mobileMenuBtn && navMenu) {
      // Set initial ARIA state
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      
      // Toggle menu on button click
      mobileMenuBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
      });
      
      // Close menu when clicking on links (mobile only)
      document.querySelectorAll('.nav-centered a').forEach(link => {
        link.addEventListener('click', function(e) {
          // Only prevent default for anchor links (#)
          if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
          
          // Close menu if on mobile
          if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
          }
        });
      });
    }
  });