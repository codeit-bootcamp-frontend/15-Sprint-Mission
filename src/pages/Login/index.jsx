import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthInput } from "@/components/Inputs/AuthInput";
import { PasswordInput } from "@/components/Inputs/PasswordInput";
import AuthFormStyle from "@/components/Inputs/AuthForm.styles";
import Button from "@/components/Button";
import SignEasy from "@/components/SignEasy";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

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

  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value) return "이메일을 입력해주세요.";
    if (!emailRegex.test(value)) return "잘못된 이메일 형식입니다.";
    return "";
  };

  const validatePassword = (value) => {
    if (!value) return "비밀번호를 입력해주세요.";
    if (value.length < 8) return "비밀번호는 8자 이상이어야 합니다.";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error =
      name === "email" ? validateEmail(value) : validatePassword(value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  useEffect(() => {
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    setIsFormValid(!emailError && !passwordError);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
    };

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
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
