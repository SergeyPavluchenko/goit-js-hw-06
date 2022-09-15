const sizeControlRef = document.querySelector('#font-size-control');
const textSizeRef = document.querySelector('#text');

textSizeRef.style.fontSize = `${sizeControlRef.value}px`;

sizeControlRef.addEventListener('input', (event) => {
    textSizeRef.style.fontSize = `${event.currentTarget.value}px`
});