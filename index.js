let positionX = 0;
let animationId;

function animateSquare(){
    positionX += 1;
    square.style.left = positionX + 'px';
animationId = requestAnimationFrame(animateSquare);
}

function startAnimation(){
    console.log ('start');
    animationId = requestAnimationFrame(animateSquare);
    startButton.disabled=true;
    stopButton.disabled=false;
}

function stopAnimation(){
    cancelAnimationFrame(animationId);
        startButton.disabled=false;
        stopButton.disabled=true;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    const square = document.getElementById ('square');

    const startButton = document.getElementById ('startButton');

    const stopButton = document.getElementById ('stopButton');

    startButton.addEventListener('click', startAnimation);

    stopButton.addEventListener('click', stopAnimation);
});
