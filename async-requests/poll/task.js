document.addEventListener('DOMContentLoaded', function() {
    async function loadPoll() {
      try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
        const pollData = await response.json();
  
        const pollTitle = document.getElementById('poll__title');
        const pollAnswers = document.getElementById('poll__answers');
  
        pollTitle.textContent = pollData.data.title;
  
        pollAnswers.innerHTML = '';
 
        pollData.data.answers.forEach(answer => {
          const answerButton = document.createElement('button');
          answerButton.className = 'poll__answer';
          answerButton.textContent = answer;
          answerButton.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
          });
          pollAnswers.appendChild(answerButton);
        });
  
      } catch (error) {
        console.error('Ошибка при получении данных опроса:', error);
      }
    }
  
    loadPoll();
  });
  