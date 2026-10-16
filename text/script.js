// Переключатель мобильного бургер-меню
const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Управление модальным окном заказа замера
const modal = document.getElementById('order-modal');

function openModal() {
    if (modal) modal.style.display = 'flex';
}

function closeModal() {
    if (modal) modal.style.display = 'none';
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Обработка отправки контактных данных формы
const leadForm = document.getElementById('lead-form');
if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Заявка успешно принята! Инженер-замерщик свяжется с вами в течение 15 минут.');
        closeModal();
        leadForm.reset();
    });
}
