const elements = document.querySelectorAll('.todo-list button');

elements.forEach(element => {
    element.addEventListener('mouseleave', () => {
        element.blur();
    });

    element.addEventListener('click', () => {
        element.blur();
    });
});
