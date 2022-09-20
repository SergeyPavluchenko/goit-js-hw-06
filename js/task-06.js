
const blurActRef = document.querySelector('#validation-input');

const inputLengthRef = blurActRef.getAttribute('data-length')

function hendLeClickBlur(event) {
    const { dataset, value } = event.target;
    const requiredLength = Number(dataset.length)
    console.log('blur');
    console.log(requiredLength);
    console.log(value.length);
    event.target.classList.remove('valid')
    if (requiredLength === value.length) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid')
    } else {
        event.target.classList.remove('valid');
        event.target.classList.add('invalid')
    }
}

blurActRef.addEventListener('blur', hendLeClickBlur);
