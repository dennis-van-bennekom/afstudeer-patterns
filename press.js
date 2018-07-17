const button = document.getElementsByClassName('button')[0];
const heart = document.getElementsByClassName('heart')[0];
const checkmark = document.getElementsByClassName('checkmark')[0];
const popup = document.getElementsByClassName('popup')[0];

button.addEventListener('mousedown', start);
button.addEventListener('touchstart', start);
button.addEventListener('mouseleave', end);
button.addEventListener('mouseup', end);
button.addEventListener('touchend', end);
// button.addEventListener('touchmove', end);

let timer;

function start(e) {
    e.preventDefault();

    timer = setTimeout(pressed, 1000);

    button.classList.add('grow');
}

function end(e) {
    e.preventDefault();

    clearTimeout(timer);

    button.classList.remove('grow');
}

function pressed() {
    button.classList.remove('grow');

    popup.classList.add('visible');
    setTimeout(() => popup.classList.remove('visible'), 1500);
}