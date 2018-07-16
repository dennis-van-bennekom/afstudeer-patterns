const title = document.getElementsByClassName('title')[0];
const button = document.getElementsByClassName('button')[0];

button.addEventListener('click', () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
});