function navigateTo(page) {
    if(page === 'login') {
        window.location.href = 'login.html'; // 또는 window.location.assign('login.html');
    } else if(page === 'items') {
        window.location.href = 'items.html'; // 또는 window.location.assign('items.html');
    }
}

const loginButton = document.querySelector('.login-button');
loginButton.addEventListener('click', function() {
    navigateTo('items');
});

const signupButton = document.querySelector('.signup-button');
signupButton.addEventListener('click', function() {
    navigateTo('login');
});
