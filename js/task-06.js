
const blurActRef = document.querySelector('#validation-input');

const inputLengthRef = blurActRef.getAttribute('data-length')
console.log(inputLengthRef);

blurActRef.addEventListener('blur', inputBlur); 

function inputBlur(event) {

    const isValid = event.currentTarget.value.length === inputLengthRef;
    if (isValid) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid')
        return;
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid')
        return;
    }
}






// function inputBlur(event) {
//     const inputRef = event.currentTarget.value === Number(inputRef);
//     if (inputRef === event.currentTarget.value) {
//         event.currentTarget.classList.add('valid');
//         event.currentTarget.classList.remove('invalid')
//         return
//         } else {
//             event.currentTarget.classList.add('invalid');
//             event.currentTarget.classList.remove('valid')
//             return
//          }
//     }
