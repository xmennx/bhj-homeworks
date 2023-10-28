const controlFontSize = document.querySelector('.book__control_font-size');
const bookElement = document.getElementById('book');

controlFontSize.addEventListener('click', function(event) {
  event.preventDefault();
  
  const activeElement = controlFontSize.querySelector('.font-size_active');
  activeElement.classList.remove('font-size_active');

  const clickedElement = event.target;
  clickedElement.classList.add('font-size_active');

  bookElement.classList.remove('book_fs-big', 'book_fs-small');

  const newSize = clickedElement.dataset.size;
  if (newSize === 'big') {
    bookElement.classList.add('book_fs-big');
  } else if (newSize === 'small') {
    bookElement.classList.add('book_fs-small');
  }
});
