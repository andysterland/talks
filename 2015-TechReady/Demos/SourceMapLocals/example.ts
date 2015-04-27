window.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener('click', () => {
        this.textContent = 'hello world';
    });
});
