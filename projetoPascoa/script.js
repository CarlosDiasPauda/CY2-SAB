document.addEventListener("DOMContentLoaded",() => {
    const buttons = document.querySelectorAll(".product button");

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Ovo de Páscoa comprado!');
        });
    });
});