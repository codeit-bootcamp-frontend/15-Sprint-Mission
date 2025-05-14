import { useEmailValidator } from "../../hooks/useEmailValidator";
import { usePasswordInput } from "../../hooks/usePasswordInput";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import google from "../../assets/images/google.svg";
import kakao from "../../assets/images/kakao.svg";
import "./AuthForm.css";

function LoginPage() {
  const email = useEmailValidator();
  const password = usePasswordInput();

  const isDisabled = !email.isValid || password.value.length < 8;

  return (
    <div className="sign-page">
      <header className="page-header">
        <NavLink to="/">
          <img className="logo" src={logo} alt="판다마켓 로고" />
        </NavLink>
      </header>

      <main className="page-main">
        <form className="form-container">
          <div className="email-container">
            <label htmlFor="input-email">이메일</label>
            <div className="email-input">
              <input
                id="input-email"
                type="email"
                value={email.email}
                onChange={email.onChange}
                onBlur={email.onBlur}
                className={email.hasError ? "warning" : ""}
                placeholder="이메일을 입력해주세요"
              />
              {email.hasError && (
                <p className="error-message">잘못된 이메일입니다.</p>
              )}
            </div>
          </div>

          <div className="password-container">
            <label htmlFor="input-password">비밀번호</label>
            <div className="password-input">
              <input
                id="input-password"
                type={password.visible ? "text" : "password"}
                value={password.value}
                onChange={password.onChange}
                onBlur={password.onBlur}
                className={password.hasError ? "warning" : ""}
                placeholder="비밀번호를 입력해주세요"
              />
              <button
                type="button"
                className={`visibility ${password.visible && "visible"}`}
                onClick={password.toggleVisible}
              />
              {password.hasError && (
                <p className="error-message">
                  비밀번호를 8자 이상 입력해주세요.
                </p>
              )}
            </div>
          </div>

          <button type="submit" disabled={isDisabled} className="submit-button">
            로그인
          </button>
        </form>

        <section className="social-login">
          <p>간편 로그인하기</p>
          <ul className="social-list">
            <li>
              <a href="https://www.google.com/">
                <img src={google} alt="구글 로그인" />
              </a>
            </li>
            <li>
              <a href="https://www.kakaocorp.com/page/">
                <img src={kakao} alt="카카오 로그인" />
              </a>
            </li>
          </ul>
        </section>

        <section className="ask-section">
          <p>판다마켓이 처음이신가요?</p>
          <NavLink to="/signup">회원가입</NavLink>
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
