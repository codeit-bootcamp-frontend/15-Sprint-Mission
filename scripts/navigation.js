function navigateTo(page) {
    if(page === 'login') {
        window.location.href = 'login.html';
    } else if(page === 'items') {
        window.location.href = 'items.html';
    }
}

const loginButton = document.querySelector('.login-button');
loginButton.addEventListener('onclick', function(event) {
    event.preventDefault();
    navigateTo('items');
});

const signupButton = document.querySelector('.signup-button');
signupButton.addEventListener('onclick', function(event) {
    event.preventDefault()
    navigateTo('login');
});
