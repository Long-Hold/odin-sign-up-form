const passwordField = document.getElementById('password');
const repeatedPasswordField = document.getElementById('confirm-password');

repeatedPasswordField.addEventListener('change', (event) => {
    if (event.target.value !== passwordField.value) {
        repeatedPasswordField.setCustomValidity("Password Fields Must Match");
    }
    else {
        repeatedPasswordField.setCustomValidity('');
    }
})
