const button = document.getElementsByClassName('button')[0];
const heart = document.getElementsByClassName('heart')[0];
const checkmark = document.getElementsByClassName('checkmark')[0];

button.addEventListener('click', () => {
    heart.classList.add('hide');
    checkmark.classList.remove('hide');

    setTimeout(() => {
        heart.classList.remove('hide');
        checkmark.classList.add('hide');
    }, 1500);
});