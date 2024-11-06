// Функция для создания круга
function createRipple(event) {
    const terminal = document.getElementById('terminal'); // Получаем контейнер терминала
    const ripple = document.createElement('div'); // Создаем новый элемент
    ripple.classList.add('ripple'); // Добавляем класс для анимации

    const rect = terminal.getBoundingClientRect(); // Получаем размеры контейнера терминала
    const size = Math.max(terminal.offsetWidth, terminal.offsetHeight); // Размер круга зависит от размера контейнера
    const x = event.clientX - rect.left - size / 2; // Вычисляем координаты для круга
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`; // Устанавливаем размеры круга
    ripple.style.left = `${x}px`; // Позиция по X
    ripple.style.top = `${y}px`; // Позиция по Y

    terminal.appendChild(ripple); // Добавляем круг в контейнер терминала

    // Удаляем круг через 600 мс после анимации
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Добавляем обработчик клика на терминал
document.getElementById('terminal').addEventListener('click', createRipple);
