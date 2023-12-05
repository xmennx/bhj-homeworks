document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = document.querySelector('.modal__close');
  
    const isModalClosed = document.cookie.split('; ').some(cookie => cookie.startsWith('modalClosed='));
  
    if (!isModalClosed) {
      modal.classList.add('modal_active');
    }
  
    closeButton.addEventListener('click', function() {
      modal.classList.remove('modal_active');
      document.cookie = 'modalClosed=true';
    });
  });