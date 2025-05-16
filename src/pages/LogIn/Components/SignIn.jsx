import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import EyeToggle from "../../../components/EyeToggle";
import { useState } from "react";
import useSignUpValidation from "../../../components/useSignUpValidation";


const Container = styled.div`
  position: relative;
  top: 60px;
  max-width: 640px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const LinkHome = styled(Link)`
  display: block;
  width: fit-content;
  margin: 0 auto;
`;
const Header = styled.img`
  width: 396px;
  height: 132px;
  margin: 0 auto;
  cursor: pointer;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0 auto;
  gap: 20px;
`;
const LabelText = styled.span`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0%;
  vertical-align: middle;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f4f6;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  padding: 0 16px;
  height: 56px;
`;
const Input = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.div`
  font-size: 13px;
  color: #ef4444;
  margin-top: 4px;
  margin-left: 4px;
`;

const LinkLogInButton = styled(Link)``;

const LogInButton = styled.button`
  width: 100%;
  background-color: ${(props) => (props.disabled ? "#9CA3AF" : "#3692FF")};
  margin: 0 auto;
  border-radius: 40px;
  padding: 16px 0;
  text-align: center;
  color: #f3f4f6;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const SocialLoginBox = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 74px;
  background-color: #e6f2ff;
  border-radius: 8px;
`;
const SocialWrapper = styled.div`
  display: flex;
  width: 594px;
  height: 42px;
  padding: 16px 23px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0%;
  color: #1f2937;
`;

const Social = styled.div`
  display: flex;
  gap: 12px;
  width: 100px;
  height: 42px;
`;
const SocialIcon = styled.img`
  display: flex;
  gap: 12px;
  width: 42px;
  height: 42px;
`;

const NextForm = styled.div`
  display: flex;
  width: 197px;
  height: 24px;
  gap: 4px;
  justify-content: center;
  margin: 0 auto;
  font-size: 14px;
`;
const LinkText = styled(Link)`
  color: #3692ff;
`;

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    email,
    password,
    emailError,
    passwordError,
    handleChange,
    handleBlur,
  } = useSignUpValidation();

  const isFormValid = email && password && !emailError && !passwordError;

  return (
    <Container>
      <LinkHome to="/">
        <Header src="/images/panda_market.png"  />
      </LinkHome>
      <Form>
        <LabelText>이메일</LabelText>
        <InputWrapper
          style={{ borderColor: emailError ? "#ef4444" : undefined }}
        >
          <Input
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </InputWrapper>
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}

        <LabelText>비밀번호</LabelText>
        <InputWrapper
          style={{ borderColor: passwordError ? "#ef4444" : undefined }}
        >
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <EyeToggle
            showPassword={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
            eyeOpenIcon="/images/invisible_icon.png"
            eyeClosedIcon="/images/VisibleEye.png"
          />
        </InputWrapper>
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <LinkLogInButton to="/Items">
          <LogInButton disabled={!isFormValid}>로그인</LogInButton>
        </LinkLogInButton>
      </Form>
      <SocialLoginBox>
        <SocialWrapper>
          <Label>간편 로그인하기</Label>
          <Social>
            <a href="https://www.google.co.kr/">
              <SocialIcon src="/images/google.png" alt="Google 로그인" />
            </a>
            <a href="https://www.kakaocorp.com/">
              <SocialIcon src="/images/kakaotalk.png" alt="Kakao 로그인" />
            </a>
          </Social>
        </SocialWrapper>
      </SocialLoginBox>
      <NextForm>
        <span>판다마켓이 처음이신가요?</span>
        <LinkText to="/SignUp">회원가입</LinkText>
      </NextForm>
    </Container>
  );
};

export default SignUp;
