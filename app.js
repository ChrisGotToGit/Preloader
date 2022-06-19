// function som tar bort preloader när sidan laddat klart

window.addEventListener('load', () => {
const preload = document.querySelector('.preload');
preload.classList.add("preload-finish");
});