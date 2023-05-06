const button = document.querySelector('#learn-more-button');
button.addEventListener('click', () => {
  window.location.href = 'financial-literacy.html';
});

// Скрипт для футера с текущей датой
const dateElement = document.querySelector('#current-date');
const currentDate = new Date();
dateElement.textContent = currentDate.getFullYear();