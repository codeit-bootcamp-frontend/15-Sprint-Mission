import { useState } from "react";

export default function useSignUpValidation() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);

    if (name === "password") setPassword(value);
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

    if (name === "password") {
      if (!value) {
        setPasswordError("비밀번호를 입력해주세요.");
      } else if (value.length < 8) {
        setPasswordError("비밀번호를 8자 이상 입력해주세요.");
      } else {
        setPasswordError("");
      }
    }
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    handleChange,
    handleBlur,
  };
}
