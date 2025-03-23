import { emailInput, pwdInput, submitBtn } from './constants.js';
import { emailError, pwdError, movePage } from './auth-validation.js';

// 에러 메세지
emailInput.addEventListener('focusout', emailError);
pwdInput.addEventListener('focusout', pwdError);

// 버튼 활성화
submitBtn.addEventListener('click', movePage);