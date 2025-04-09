const AuthSns = () => {
  return (
    <div className='auth-sns'>
      <p>간편 로그인하기</p>
      <ul>
        <li>
          <a href='https://google.com' target='_blank'>
            <img src='images/sub/login_sns_google.svg' alt='구글 로그인' />
          </a>
        </li>
        <li>
          <a href='https://kakao.com' target='_blank'>
            <img src='images/sub/login_sns_kakao.svg' alt='카카오 로그인' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AuthSns;
