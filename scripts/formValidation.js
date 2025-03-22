const email = document.getElementById('email');
const password = document.getElementById('pwd');
const username = document.getElementById('username');
const message = document.getElementById('message');

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
    const inputValue = email.value;

    if(!emailCheck(inputValue)) {
        if(!inputValue) {
            message.textContent = '이메일을 입력해주세요';
        } else {
            message.textContent = '잘못된 이메일 형식입니다';
        }
        email.style.border = '1px solid var(--red)';
    } else {
        message.textContent = '';
        inputValue.style.border = 'none';
    }
});


