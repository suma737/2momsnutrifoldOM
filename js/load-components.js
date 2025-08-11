// Function to load HTML components
document.addEventListener('DOMContentLoaded', function() {
  // Load header
  fetch('components/header.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);
      // Load navigation
      fetch('components/navigation.html')
        .then(response => response.text())
        .then(data => {
          const header = document.querySelector('header');
          if (header) {
            header.insertAdjacentHTML('beforeend', data);
            // Highlight the active navigation link based on current URL
            const navLinks = header.querySelectorAll('.nav-links a');
            // Get the current path; handle root '/' as 'index.html'
            let currentPath = window.location.pathname.split('/').pop();
            if (!currentPath || currentPath === '') {
              currentPath = 'index.html';
            }
            navLinks.forEach(link => {
              const linkPath = link.getAttribute('href').split('/').pop();
              if (linkPath === currentPath) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
    });

  // Load footer
  fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
    });
});
