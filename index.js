const title = document.getElementsByClassName('title')[0];
const button = document.getElementsByClassName('button')[0];
const buttonContainer = document.getElementsByClassName('button-container')[0];
const mc = new Hammer(button);

let lastX = 0;
let isDragging = false;

mc.add(new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL}));

mc.on('pan', (e) => {
    const target = e.target;
    const targetWidth = target.getBoundingClientRect().width;
    const containerWidth = buttonContainer.getBoundingClientRect().width;

    target.style.transition = '';

    if (!isDragging) {
        isDragging = true;
        lastX = getComputedTranslateX(target);
    }

    let newX = e.deltaX + lastX;

    if (newX < 0) newX = 0;
    if (newX > containerWidth - targetWidth) newX = containerWidth - targetWidth;

    target.style.transform = `translateX(${newX}px)`;

    if (e.isFinal) {
        isDragging = false;

        if (newX > 0) {
            target.style.transition = `all 0.3s ease-out`;
            target.style.transform = `translateX(0px)`;
        }

        if (newX > containerWidth - targetWidth - 5) {
            title.innerText = 'Like sent!';
            setTimeout(() => title.innerText = 'Reply:Like', 2000);

            const heart = document.createElement('div');
            heart.classList.add('heart');
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1000);
        }
    }
});

function getComputedTranslateX(obj) {
    if(!window.getComputedStyle) return;
    const style = getComputedStyle(obj),
        transform = style.transform || style.webkitTransform || style.mozTransform;
    let mat = transform.match(/^matrix3d\((.+)\)$/);
    if(mat) return parseFloat(mat[1].split(', ')[13]);
    mat = transform.match(/^matrix\((.+)\)$/);
    return mat ? parseFloat(mat[1].split(', ')[4]) : 0;
}