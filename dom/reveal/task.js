window.addEventListener('scroll', function() {
    const revealElements = document.querySelectorAll('.reveal');
  
    for (const element of revealElements) {
      const rect = element.getBoundingClientRect();
  
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        element.classList.add('reveal_active');
      } else {
        element.classList.remove('reveal_active');
      }
    }
  });
  