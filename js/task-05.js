const inputName = document.querySelector('#name-input');
const NameOutRef = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
    NameOutRef.textContent = event.currentTarget.value || 'Anonymous';
})