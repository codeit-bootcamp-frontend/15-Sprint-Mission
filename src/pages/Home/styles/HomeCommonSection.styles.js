// src/pages/Home/styles/HomeCommonSection.styles.js
import { css } from "@emotion/react";
import { tablet, mobile, desktop } from "@/styles/utils/mixins";

export const backgroundStyle = css`
  background-color: var(--skyblue);
  display: flex;
  align-items: end;
  height: 540px;
  justify-content: center;

  ${tablet(css`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 771px;
  `)}

  ${mobile(css`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
  `)}
`;

export const bgDescriptionStyle = css`
  display: flex;
  justify-content: center;
  padding-bottom: 60px;

  h2 {
    margin: 0 0 32px 0;
  }
`;

export const h2Style = css`
  font-size: 40px;
  font-weight: 700;
  line-height: 56px;
  color: var(--gray700);

  ${tablet(css`
    font-size: 40px;
    line-height: 140%;
    text-align: center;
    vertical-align: middle;
  `)}

  ${mobile(css`
    font-size: 32px;
    line-height: 140%;
    text-align: center;
    vertical-align: middle;
  `)}
`;

export const lineBreakStyle = css`
  ${desktop(css`
    display: block;
  `)}

  ${mobile(css`
    display: block;
  `)}
`;
