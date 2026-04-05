
const searchInput = document.querySelector('.search-container input');

const cards = document.querySelectorAll('.card');


searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase(); // Берем текст и делаем его маленькими буквами

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        
        if (title.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

const readBtn = document.querySelector('.cta-button');

readBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    alert('Добро пожаловать в архив MineBlog! Скоро здесь появятся статьи.');
});
const themeBtn = document.getElementById('theme-toggle');

themeBtn.onclick = function() {

    document.body.classList.toggle('light-theme');
};
const startButton = document.querySelector('.cta-button');


startButton.addEventListener('click', function() {
   
    window.location.href = 'reading.html'; 
});

document.querySelector('.burger-menu').addEventListener('click', function() {
    // Переключаем класс 'active' у выпадающего списка
    const dropdown = document.querySelector('.dropdown-content');
    
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// Закрыть меню, если кликнуть в любом другом месте экрана
window.onclick = function(event) {
    if (!event.target.matches('.burger-menu') && !event.target.matches('.burger-menu span')) {
        const dropdown = document.querySelector('.dropdown-content');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
};
const clickSound = new Audio('templates/click.mp3');

// Находим все большие кнопки
const buttons = document.querySelectorAll('.big-clickable-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        clickSound.play();
    });
});