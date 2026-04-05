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

const burgerTrigger = document.querySelector('.burger-trigger');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (burgerTrigger && dropdownMenu) {
    burgerTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function(event) {
        if (!event.target.closest('.burger-trigger') && !event.target.closest('.dropdown-menu')) {
            dropdownMenu.style.display = 'none';
        }
    });
}