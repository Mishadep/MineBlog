const searchInput = document.querySelector('.search-container input');
const cards = document.querySelectorAll('.card');

if (searchInput && cards.length) {
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('h3')?.innerText.toLowerCase() || '';

            if (title.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.onclick = function() {
        document.body.classList.toggle('light-theme');
    };
}

const burgerMenu = document.querySelector('.burger-menu');
const dropdown = document.querySelector('.dropdown-content');
if (burgerMenu && dropdown) {
    burgerMenu.addEventListener('click', function() {
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.burger-menu') && !event.target.matches('.burger-menu span')) {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            }
        }
    });
}

const clickSound = new Audio('templates/click.mp3');
const buttons = document.querySelectorAll('.big-clickable-button');
if (buttons.length) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clickSound.play();
        });
    });
}