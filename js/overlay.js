// Image overlay functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the overlay and related elements
    const imageOverlay = document.getElementById('imageOverlay');
    const closeOverlay = document.querySelector('.close-overlay');
    const promotionLink = document.querySelector('.promotion-link');
    
    // Function to open the overlay
    function openOverlay() {
        imageOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when overlay is open
    }
    
    // Function to close the overlay
    function closeOverlayFunc() {
        imageOverlay.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Event listeners
    if (promotionLink) {
        promotionLink.addEventListener('click', function(e) {
            e.preventDefault();
            openOverlay();
        });
    }
    
    if (closeOverlay) {
        closeOverlay.addEventListener('click', closeOverlayFunc);
    }
    
    // Close overlay when clicking outside the content
    imageOverlay.addEventListener('click', function(e) {
        if (e.target === imageOverlay) {
            closeOverlayFunc();
        }
    });
    
    // Close overlay when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageOverlay.style.display === 'flex') {
            closeOverlayFunc();
        }
    });
});
