const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (nameValue === '') {
        nameInput.setAttribute('aria-invalid', 'true');
        document.querySelector('#name-error').textContent = 'Please enter your name';
    } else {
        nameInput.setAttribute('aria-invalid', 'false');
        document.querySelector('#name-error').textContent = '';
    }

    if (emailValue === '') {
        emailInput.setAttribute('aria-invalid', 'true');
        document.querySelector('#email-error').textContent = 'Please enter your email';
    } else if (!isValidEmail(emailValue)) {
        emailInput.setAttribute('aria-invalid', 'true');
        document.querySelector('#email-error').textContent = 'Please enter a valid email';
        document.querySelector('#email-format').textContent = 'The email should be in the format user@domain.com';
    } else {
        emailInput.setAttribute('aria-invalid', 'false');
        document.querySelector('#email-error').textContent = '';
        document.querySelector('#email-format').textContent = '';
    }

    if (passwordValue === '') {
        passwordInput.setAttribute('aria-invalid', 'true');
        document.querySelector('#password-error').textContent = 'Please enter your password';
    } else if (!isValidPassword(passwordValue)) {
        passwordInput.setAttribute('aria-invalid', 'true');
        document.querySelector('#password-error').textContent = 'Please enter a password with at least 8 characters and a number';
        document.querySelector('#password-format').textContent = 'The password should contain at least 8 characters and 1 number';
    } else {
        passwordInput.setAttribute('aria-invalid', 'false');
        document.querySelector('#password-error').textContent = '';
        document.querySelector('#password-format').textContent = '';
    }

    if (nameValue !== '' && emailValue !== '' && isValidEmail(emailValue) && passwordValue !== '' && isValidPassword(passwordValue)) {
        alert('Form submitted successfully!');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}