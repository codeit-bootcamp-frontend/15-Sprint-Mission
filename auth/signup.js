import { emailInput, nicknameInput, pwdInput, checkPwdInput, submitBtn } from './constants.js';
import { emailError, nicknameError, pwdError, checkPwdError, movePage } from './auth-validation.js';

// 에러 메세지
emailInput.addEventListener('focusout', emailError);
nicknameInput.addEventListener('focusout', nicknameError);
pwdInput.addEventListener('focusout', pwdError);
checkPwdInput.addEventListener('focusout', checkPwdError);

// 버튼 활성화
submitBtn.addEventListener('click', movePage);