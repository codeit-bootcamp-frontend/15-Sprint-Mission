import { css } from "@emotion/react";

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "Pretendard", sans-serif;
    font-size: 62.5%;
    vertical-align: baseline;
    min-width: 368px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol,
  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
