document.addEventListener('DOMContentLoaded', () => {
    // 1. Управление мобильным бургер-меню
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('navMenu') || document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Закрытие меню при клике на ссылку в мобильной версии
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    // 2. Управление модальным окном заказа замера
    const modal = document.getElementById('order-modal');
    const openModalBtns = [
        document.getElementById('open-modal-btn'),
        document.getElementById('hero-modal-btn')
    ];
    const closeModalBtn = document.getElementById('close-modal-btn');

    function openModal() {
        if (modal) modal.style.display = 'flex';
    }

    function closeModal() {
        if (modal) modal.style.display = 'none';
    }

    openModalBtns.forEach(btn => {
        if (btn) btn.addEventListener('click', openModal);
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Закрытие модалки при клике на темную область вокруг окна
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 3. Обработка отправки контактных данных формы
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Заявка успешно принята! Инженер-замерщик свяжется с вами в течение 15 минут.');
            closeModal();
            leadForm.reset();
        });
    }
});

