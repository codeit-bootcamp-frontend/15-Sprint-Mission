import Google from "/icons/Google.png";
import Kakao from "/icons/Kakao.png";
import { css } from "@emotion/react";

function SignEasy() {
  return (
    <div css={signEasy}>
      간편 로그인하기
      <div css={signEasyDiv}>
        <a href="https://www.google.com/">
          <img css={icon} src={Google} alt="간편로그인 구글" />
        </a>
        <a href="https://www.kakaocorp.com/page/">
          <img css={icon} src={Kakao} alt="간편로그인 카카오" />
        </a>
      </div>
    </div>
  );
}

export default SignEasy;

const signEasy = css`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 16px 23px;
  gap: 10px;
  width: 100%;
  height: 74px;
  background: var(--background); /* 배경색 */
  border-radius: 8px;

  flex: none;
  order: 1;
  flex-grow: 0;
  color: var(--gray800);
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
`;

const signEasyDiv = css`
  display: flex;
  gap: 16px;
`;

const icon = css`
  width: 42px;
  height: 42px;
`;
