import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AuthInput } from "../../components/Inputs/AuthInput";
import { PasswordInput } from "../../components/Inputs/PasswordInput";
import AuthFormStyle from "@/components/Inputs/AuthForm.styles";
import SignEasy from "@/components/SignEasy";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = useCallback((value) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value) return "이메일을 입력해주세요.";
    if (!emailRegex.test(value)) return "잘못된 이메일 형식입니다.";
    return "";
  }, []);

  const validateUsername = useCallback((value) => {
    if (!value) return "닉네임을 입력해주세요.";
    return "";
  }, []);

  const validatePassword = useCallback((value) => {
    if (!value) return "비밀번호를 입력해주세요.";
    if (value.length < 8) return "비밀번호는 8자 이상이어야 합니다.";
    return "";
  }, []);

  const validatePasswordConfirm = useCallback((value, password) => {
    if (!value) return "비밀번호 확인을 입력해주세요.";
    if (value !== password) return "비밀번호가 일치하지 않습니다.";
    return "";
  }, []);

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
      case "username":
        error = validateUsername(value);
        break;
      case "password":
        error = validatePassword(value);
        // 비밀번호가 변경되면 비밀번호 확인도 다시 검증
        if (formData.passwordConfirm) {
          setErrors((prev) => ({
            ...prev,
            passwordConfirm: validatePasswordConfirm(
              formData.passwordConfirm,
              value
            ),
          }));
        }
        break;
      case "passwordConfirm":
        error = validatePasswordConfirm(value, formData.password);
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
    const usernameError = validateUsername(formData.username);
    const passwordError = validatePassword(formData.password);
    const passwordConfirmError = validatePasswordConfirm(
      formData.passwordConfirm,
      formData.password
    );

    setIsFormValid(
      !emailError && !usernameError && !passwordError && !passwordConfirmError
    );
  }, [
    formData,
    validateEmail,
    validateUsername,
    validatePassword,
    validatePasswordConfirm,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 제출 시 모든 필드 검증
    const emailError = validateEmail(formData.email);
    const usernameError = validateUsername(formData.username);
    const passwordError = validatePassword(formData.password);
    const passwordConfirmError = validatePasswordConfirm(
      formData.passwordConfirm,
      formData.password
    );

    setErrors({
      email: emailError,
      username: usernameError,
      password: passwordError,
      passwordConfirm: passwordConfirmError,
    });

    // 모든 검증 통과 시 items 페이지로 이동
    if (
      !emailError &&
      !usernameError &&
      !passwordError &&
      !passwordConfirmError
    ) {
      navigate("/login");
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
      <AuthInput
        label="닉네임"
        id="username"
        name="username"
        type="text"
        placeholder="닉네임을 입력하세요"
        value={formData.username}
        onChange={handleChange}
        errorMessage={errors.username}
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
      <PasswordInput
        label="비밀번호 확인"
        id="passwordConfirm"
        name="passwordConfirm"
        placeholder="비밀번호를 다시 입력하세요"
        value={formData.passwordConfirm}
        onChange={handleChange}
        errorMessage={errors.passwordConfirm}
      />
      <Button disabled={!isFormValid}>회원가입</Button>
      <SignEasy />
      <div css={goLogin}>
        이미 회원이신가요?
        <Link to="/login" css={goLoginLink}>
          로그인
        </Link>
      </div>
    </form>
  );
}

export default Signup;

const goLogin = css`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  gap: 4px;
  color: var(--gray800);
`;

const goLoginLink = css`
  color: var(--blue100);
  text-decoration: underline;
`;
