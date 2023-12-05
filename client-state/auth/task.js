document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signin__form');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem('userId', data.user_id);
          userIdSpan.textContent = data.user_id;
          welcomeBlock.classList.add('welcome_active');
        } else {
          alert('Неверный логин/пароль');
        }
      })
      .catch(error => console.error('Ошибка:', error));
    });
  
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      userIdSpan.textContent = storedUserId;
      welcomeBlock.classList.add('welcome_active');
    }
  });