import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

import logo from "../../assets/images/logo.svg";
import google from "../../assets/images/google.svg";
import kakao from "../../assets/images/kakao.svg";

const Login = ({ type }) => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [emailError, setEmailError] = useState(true);
  const [nicknameError, setNicknameError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [passwordCheckError, setPasswordCheckError] = useState(true);

  const [emailTouched, setEmailTouched] = useState(false);
  const [nicknameTouched, setNicknameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordCheckTouched, setPasswordCheckTouched] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className="sign-page">
      <header className="page-header">
        <NavLink to="/">
          <img className="logo" src={logo} alt="판다마켓 로고 이미지" />
        </NavLink>
      </header>
      <main className="page-main">
        <section>
          <form className="form-container">
            <div className="email-container">
              <label htmlFor="input-email">이메일</label>
              <div className="email-input">
                <input
                  id="input-email"
                  name="email"
                  type="email"
                  value={email}
                  className={`${emailError && emailTouched ? "warning" : ""}`}
                  onChange={(e) => {
                    const newEmail = e.target.value;
                    setEmail(newEmail);
                    setEmailError(!isValidEmail(newEmail));
                  }}
                  onBlur={() => {
                    setEmailTouched(true);
                    setEmailError(!isValidEmail(email));
                  }}
                  placeholder="이메일을 입력해주세요"
                />
                {emailError && emailTouched && (
                  <div className="error-message">잘못된 이메일입니다.</div>
                )}
              </div>
            </div>
            {type === "signup" && (
              <div className="nickname-container">
                <label htmlFor="input-nickname">닉네임</label>
                <div className="nickname-input">
                  <input
                    id="input-nickname"
                    name="nickname"
                    type="text"
                    value={nickname}
                    className={`${
                      nicknameError && nicknameTouched ? "warning" : ""
                    }`}
                    onChange={(e) => {
                      const newNickname = e.target.value;
                      setNickname(newNickname);
                      setNicknameError(newNickname.trim().length === 0);
                    }}
                    onBlur={() => {
                      setNicknameTouched(true);
                      setNicknameError(nickname.length === 0);
                    }}
                    placeholder="닉네임을 입력해주세요"
                  />
                  {nicknameError && nicknameTouched && (
                    <div className="error-message">닉네임을 입력해주세요.</div>
                  )}
                </div>
              </div>
            )}
            <div className="password-container">
              <label htmlFor="input-password">비밀번호</label>
              <div className="password-input">
                <input
                  id="input-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  className={`${
                    passwordError && passwordTouched ? "warning" : ""
                  }`}
                  onChange={(e) => {
                    const newPassword = e.target.value;
                    setPassword(newPassword);
                    setPasswordError(newPassword.length < 8);
                    setPasswordCheckError(passwordCheck !== newPassword);
                  }}
                  onBlur={() => {
                    setPasswordTouched(true);
                    setPasswordError(password.length < 8);
                    setPasswordCheckError(passwordCheck !== password);
                  }}
                  placeholder="비밀번호를 입력해주세요"
                />
                <button
                  className={`visibility ${showPassword && "visible"}`}
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                ></button>
                {passwordError && passwordTouched && (
                  <div className="error-message">
                    비밀번호를 8자 이상 입력해주세요.
                  </div>
                )}
              </div>
            </div>

            {type === "signup" && (
              <div className="password-check-container">
                <label htmlFor="input-password-check">비밀번호 확인</label>
                <div className="password-input">
                  <input
                    id="input-password-check"
                    name="password-check"
                    type={showPasswordCheck ? "text" : "password"}
                    value={passwordCheck}
                    className={`${
                      passwordCheckError && passwordCheckTouched
                        ? "warning"
                        : ""
                    }`}
                    onChange={(e) => {
                      const newPasswordCheck = e.target.value;
                      setPasswordCheck(newPasswordCheck);
                      setPasswordCheckError(newPasswordCheck !== password);
                    }}
                    onBlur={() => {
                      setPasswordCheckTouched(true);
                      setPasswordCheckError(passwordCheck !== password);
                    }}
                    placeholder="비밀번호를 다시 한 번 입력해주세요"
                  />
                  <button
                    className={`visibility ${showPasswordCheck && "visible"}`}
                    type="button"
                    onClick={() => setShowPasswordCheck((prev) => !prev)}
                  ></button>
                  {passwordCheckError && passwordCheckTouched && (
                    <div className="error-message">
                      비밀번호가 일치하지 않습니다.
                    </div>
                  )}
                </div>
              </div>
            )}

            <button
              disabled={
                type === "login"
                  ? emailError || passwordError
                  : emailError ||
                    nicknameError ||
                    passwordError ||
                    passwordCheckError
              }
              type="submit"
              className="submit-button"
            >
              {type === "login" ? "로그인" : "회원가입"}
            </button>
          </form>
        </section>
        <section className="social-login">
          <p>간편 로그인하기</p>
          <ul className="social-list">
            <li>
              <a href="https://www.google.com/">
                <img src={google} alt="구글 계정으로 로그인" />
              </a>
            </li>
            <li>
              <a href="https://www.kakaocorp.com/page/">
                <img src={kakao} alt="카카오톡 계정으로 로그인" />
              </a>
            </li>
          </ul>
        </section>
        <section className="ask-section">
          {type === "login" ? (
            <>
              <p>판다마켓이 처음이신가요?</p>
              <a href="/signup">회원가입</a>
            </>
          ) : (
            <>
              <p>이미 회원이신가요?</p>
              <a href="/login">로그인</a>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Login;
