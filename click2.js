const button = document.getElementsByClassName('button')[0];
const popup = document.getElementsByClassName('popup')[0];

button.addEventListener('click', () => {
    popup.classList.add('visible');
    setTimeout(() => popup.classList.remove('visible'), 1500);
});