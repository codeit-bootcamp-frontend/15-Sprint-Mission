const AuthForm = () => {
  return (
    <form id='authForm' className='auth-form'>
      <ul className='auth-form'>
        <li>
          <label for='email'>이메일</label>
          <input type='text' id='email' placeholder='이메일을 입력하세요' />
          <p id='email-error' className='error-message message-empty'>
            이메일을 입력해주세요.
          </p>
          <p id='email-error' className='error-message message-format'>
            잘못된 이메일입니다.
          </p>
        </li>
        <li>
          <label for='password'>비밀번호</label>
          <input type='password' id='password' placeholder='비밀번호를 입력하세요' />
          <button type='button' className='toggle-password'>
            <img src='images/common/ic_eye_off.svg' alt='비밀번호 보기' />
          </button>
          <p id='email-error' className='error-message message-empty'>
            비밀번호를 입력해주세요.
          </p>
          <p id='email-error' className='error-message message-format'>
            비밀번호를 8자 이상 입력해주세요.
          </p>
        </li>
      </ul>
      <button type='submit' className='auth-btn' disabled>
        로그인
      </button>
    </form>
  );
};

export default AuthForm;
