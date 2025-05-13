/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { tablet, mobile } from "@/styles/utils/mixins";

// Footer 스타일
export const footer = css`
  background-color: var(--gray900);
  justify-content: center;
  height: 170px;
`;

export const footerContainer = css`
  color: var(--gray400);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 32px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;

  ${tablet(css`
    width: auto;
    padding: 32px 0 108px;
    margin: 0 104px;
    font-family: Abel;
  `)}

  ${mobile(css`
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: auto;
    padding: 32px;
    font-family: Arial;
    position: relative;
  `)}
`;

export const heading = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;

  ${mobile(css`
    display: block;
    text-align: center;
    position: absolute;
    top: 110px;
    left: 32px;
  `)}
`;

export const privacyFAQ = css`
  display: flex;
  gap: 30px;
`;

export const policyLinks = css`
  text-decoration: none;
  color: var(--gray200);

  ${mobile(css`
    color: #cfcfcf;
  `)}
`;

export const icons = css`
  display: flex;
  gap: 12px;
  padding: 0;
  list-style: none;

  ${mobile(css`
    gap: 12px;
    padding: 0;
  `)}
`;

export const iconImg = css`
  width: 20px;
  height: 20px;

  ${mobile(css`
    width: 18px;
    height: 18px;
  `)}
`;
