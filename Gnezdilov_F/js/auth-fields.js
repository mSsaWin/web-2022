signInField = document.querySelector('.signin-field');
signUpField = document.querySelector('.signup-field');
signInBtn = document.getElementById('SignIn');
signUpBtn = document.getElementById('SignUp');

signUpBtn.style.background = '#fff';
signUpField.style.display = 'None';

signInBtn.onclick = (event) => {
    signInBtn.style.background = '#f8f9fa';
    signInField.style.display = 'flex';

    signUpBtn.style.background = '#fff';
    signUpField.style.display = 'None';
}

signUpBtn.onclick = (event) => {
    signUpBtn.style.background = '#f8f9fa';
    signUpField.style.display = 'flex';

    signInBtn.style.background = '#fff';
    signInField.style.display = 'None';
}