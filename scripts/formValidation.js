const email = document.getElementById('email');
const password = document.getElementById('pwd');
const username = document.getElementById('username');
// const message = document.getElementById('message');
let checkValid = true;

document.documentElement.style.setProperty('--red', '#F74747');

function emailCheck(email_address){     
	email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(!email_regex.test(email_address)){ 
		return false; 
	}else{
		return true;
	}
}

email.addEventListener('focusout', function() {
    const message = document.getElementsByClassName('message-email')[0];
    const inputValue = email.value;

    if(!emailCheck(inputValue)) {
        if(!inputValue) {
            message.textContent = '이메일을 입력해주세요';
        } else {
            message.textContent = '잘못된 이메일 형식입니다';
        }
        email.style.border = '1px solid var(--red)';
        checkValid = false;
    } else {
        message.textContent = '';
        email.style.border = 'none';
        checkValid = true;
    }
});


password.addEventListener('focusout', function() {
    const message = document.getElementsByClassName('message-password')[0];
    const inputValue = password.value;

    if(!inputValue) {
        message.textContent = '비밀번호를 입력해주세요';
        password.style.border = '1px solid var(--red)';
        checkValid = false;
    } else if(inputValue.length < 8) {
        message.textContent = '비밀번호를 8자 이상 입력해주세요';
        password.style.border = '1px solid var(--red)';
        checkValid = false;
    } else {
        message.textContent = '';
        password.style.border = 'none';
        checkValid = true;
    }
});