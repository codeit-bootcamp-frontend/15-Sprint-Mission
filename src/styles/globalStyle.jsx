/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const globalStyles = css`
  /* 공통 글꼴 설정 */
  body {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    background-color: var(--white);
    color: #333;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    font-style: normal;
  }

  /* 전체 영역 기본 너비 설정 */
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  /* 공통 요소 여백 조정 */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }

  /* 모든 텍스트 요소 폰트 상속 */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  li,
  ul,
  ol {
    font-family: inherit;
  }

  /* 기본 버튼 스타일 */
  button {
    font-family: inherit;
    font-size: inherit;
  }

  textarea {
    font-family: inherit;
    font-size: inherit;
  }
`;
