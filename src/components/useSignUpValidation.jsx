import { useState } from "react";

export default function useSignUpValidation() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      if (!value) {
        setEmailError("이메일을 입력해주세요.");
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setEmailError("잘못된 이메일 형식입니다.");
      } else {
        setEmailError("");
      }
    }

    if (name === "username") {
      if (!value) {
        setUsernameError("닉네임을 입력해주세요.");
      } else {
        setUsernameError("");
      }
    }

    if (name === "password") {
      if (!value) {
        setPasswordError("비밀번호를 입력해주세요.");
      } else if (value.length < 8) {
        setPasswordError("비밀번호를 8자 이상 입력해주세요.");
      } else {
        setPasswordError("");
      }
    }

    if (name === "confirmPassword") {
      if (value !== password) {
        setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
      } else {
        setConfirmPasswordError("");
      }
    }
  };

  return {
    email,
    username,
    password,
    confirmPassword,
    emailError,
    usernameError,
    passwordError,
    confirmPasswordError,
    handleChange,
    handleBlur,
  };
}
