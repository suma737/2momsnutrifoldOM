// Simple parallax effect for images
document.addEventListener('DOMContentLoaded', function() {
  // Add parallax effect to hero images and profile images
  const parallaxItems = document.querySelectorAll('.hero-image img, .profile-image img');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    
    parallaxItems.forEach(item => {
      const parent = item.closest('.hero-image, .profile-image');
      const parentTop = parent.getBoundingClientRect().top;
      const parentHeight = parent.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Only apply effect when element is in viewport
      if (parentTop < viewportHeight && parentTop > -parentHeight) {
        // Calculate how far the element is from the center of the viewport
        const fromCenter = (parentTop + parentHeight/2) - viewportHeight/2;
        // Apply a subtle movement based on scroll position
        const moveY = fromCenter * 0.05;
        item.style.transform = `translateY(${moveY}px) scale(1.1)`;
      }
    });
  });
  
  // Add subtle hover animations to cards
  const cards = document.querySelectorAll('.card, .product-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-6px)';
      this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    });
  });
});
