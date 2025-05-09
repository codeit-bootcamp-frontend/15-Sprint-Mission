// src/pages/Home/styles/HomeHeader.styles.js
import { css } from "@emotion/react";
import { tablet, mobile } from "@/styles/utils/mixins";

export const nav = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  background-color: var(--white);

  border-bottom: 1px solid #dfdfdf;
  background: var(--white);
`;

export const logoWrapper = css`
  display: block;
  margin-left: 200px;

  ${tablet(css`
    margin-left: 24px;
  `)};

  ${mobile(css`
    margin-left: 16px;
  `)};
`;

export const loginBtn = css`
  background-color: var(--blue100);
  border: none;
  border-radius: 8px;
  color: var(--gray100);
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 48px;
  width: 128px;
  height: 48px;
  margin-right: 200px;
  text-decoration: none;
  text-align: center;

  ${tablet(css`
    margin-right: 24px;
  `)};

  ${mobile(css`
    margin-right: 16px;
  `)};
`;
