import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthInput } from "@/components/Inputs/AuthInput";
import { PasswordInput } from "@/components/Inputs/PasswordInput";
import AuthFormStyle from "@/components/Inputs/AuthForm.styles";
import SignEasy from "@/components/SignEasy";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { validateEmail, validatePassword } from "@/utils/validation";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 입력값이 변경될 때마다 해당 필드 검증
    let error = "";
    switch (name) {
      case "email":
        error = validateEmail(value);
        break;
      case "password":
        error = validatePassword(value);
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // 폼 유효성 검사
  useEffect(() => {
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setIsFormValid(!emailError && !passwordError);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 제출 시 모든 필드 검증
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    // 모든 검증 통과 시 items 페이지로 이동
    if (!emailError && !passwordError) {
      navigate("/items");
    }
  };

  return (
    <form css={AuthFormStyle} onSubmit={handleSubmit}>
      <AuthInput
        label="이메일"
        id="email"
        name="email"
        type="email"
        placeholder="이메일을 입력하세요"
        value={formData.email}
        onChange={handleChange}
        errorMessage={errors.email}
      />
      <PasswordInput
        label="비밀번호"
        id="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={formData.password}
        onChange={handleChange}
        errorMessage={errors.password}
      />
      <Button disabled={!isFormValid}>로그인</Button>
      <SignEasy />
      <div css={goSignup}>
        아직 회원이 아니신가요?
        <Link to="/signup" css={goSignupLink}>
          회원가입
        </Link>
      </div>
    </form>
  );
}

export default Login;

const goSignup = css`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  gap: 4px;
  color: var(--gray800);
`;

const goSignupLink = css`
  color: var(--blue100);
  text-decoration: underline;
`;
