import { useState } from "react";
import { AuthInput } from "../../components/Inputs/AuthInput";
import { PasswordInput } from "../../components/Inputs/PasswordInput";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 예시: 간단한 검증 로직
    let isValid = true;
    if (!email.includes("@")) {
      setEmailError("올바른 이메일을 입력해주세요.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("비밀번호는 6자 이상이어야 합니다.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      console.log("로그인 시도:", { email, password });
      // 로그인 처리 로직 추가
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthInput
        label="이메일"
        id="email"
        type="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={emailError}
      />
      <PasswordInput
        label="비밀번호"
        id="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorMessage={passwordError}
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
