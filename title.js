<script>
    // Функция для добавления случайных снежинок
    function createStars() {
        const numStars = 50; // Количество звезд
        const starsContainer = document.querySelector('.stars'); // Контейнер для звезд

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            const size = Math.random() * 5 + 3; // Размер звезды
            const duration = Math.random() * 4 + 4; // Продолжительность анимации
            const delay = Math.random() * 5; // Задержка анимации

            // Устанавливаем классы и стили для звезды
            star.classList.add('star');
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `-${delay}s`;

            starsContainer.appendChild(star);
        }
    }

    // Вызов функции для добавления звезд
    createStars();
</script>
