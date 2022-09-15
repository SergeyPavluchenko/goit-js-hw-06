const focusActRef = document.querySelector('#validation-input');

const inputRef = focusActRef.hasAttribute('data-length')
console.log(inputRef);

focusActRef.addEventListener('blur', inputBlur);
function inputBlur(event) {
    const inputRef = event.currentTarget.value === Number(inputRef);
    if (inputRef) {
        event.currentTarget.value.add('valid');
        event.currentTarget.value.add('invalid')
        return
    } else {
        event.currentTarget.value.add('invalid');
        event.currentTarget.value.add('valid')
        return
     }
}