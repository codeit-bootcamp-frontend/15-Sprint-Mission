import React from "react";
import { Global, css } from "@emotion/react";

const baseStyle = css`
  :root {
    --blue: #3692ff;
    --blue100: #cfe5ff;
    --white: #ffffff;
    --gray900: #111827;
    --gray800: #1f2937;
    --gray700: #374151;
    --gray600: #4b5563;
    --gray500: #6b7280;
    --gray300: #9ca3af;
    --gray200: #e5e7eb;
    --gray100: #f3f4f6;
    --gray50: #f9fafb;
    --line100: #dfdfdf;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 100ms ease-in-out;
  }

  html,
  body {
    height: 100%;
    background-color: var(#fcfcfc);
    font-family: "Pretendard", sans-serif;
    font-size: 10px;
  }

  div,
  p,
  a {
    font-size: 1.6rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
