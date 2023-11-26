document.addEventListener('DOMContentLoaded', function() {
    async function fetchCurrencyRates() {
      try {
        const loader = document.getElementById('loader');
        loader.classList.add('loader_active');
  
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        const data = await response.json();
  
        loader.classList.remove('loader_active');
  
        const itemsContainer = document.getElementById('items');
        itemsContainer.innerHTML = ''; 
  
        for (let key in data.response.Valute) {
          const valute = data.response.Valute[key];
          
          const currencyDiv = document.createElement('div');
          currencyDiv.classList.add('item');
  
          currencyDiv.innerHTML = `
            <div class="item__code">
                ${valute.CharCode}
            </div>
            <div class="item__value">
                ${valute.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
          `;
  
          itemsContainer.appendChild(currencyDiv);
        }
  
      } catch (error) {
        console.error('Ошибка при получении данных о курсе валют:', error);
      }
    }
  
    fetchCurrencyRates();
  });
  