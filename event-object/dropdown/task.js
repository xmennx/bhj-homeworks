document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
      let dropdownValue = dropdown.querySelector('.dropdown__value');
      let dropdownList = dropdown.querySelector('.dropdown__list');
      let dropdownItems = dropdown.querySelectorAll('.dropdown__item');
      
      dropdownValue.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownList.classList.toggle('dropdown__list_active');
      });
  
      dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
          event.preventDefault();
          dropdownValue.textContent = this.textContent;
          dropdownList.classList.remove('dropdown__list_active');
        });
      });
    });
  });
  