setInterval(createRain, 50); 

function createRain() {
    const snow = document.createElement('i');
    snow.classList.add('bx');
    snow.classList.add('bxs-circle');
    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.animationDuration = Math.random() * 3 + 2 + 's';
    snow.style.opacity = Math.random();
    snow.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 5000)
}






