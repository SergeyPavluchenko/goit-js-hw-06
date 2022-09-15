const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    const {
        elements: { email, password }, } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert('Заповніть всі поля!');
        return
    }
    const refs = {
        email: email.value,
        password: password.value,
    }
        console.log(refs);
    formRef.reset();
    }
    // console.log('email', event.currentTarget.elements.email.value);
    // console.log('password', event.currentTarget.elements.password.value);
