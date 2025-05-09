// src/pages/Home/styles/HomeTopSection.styles.js
import { css } from "@emotion/react";
import { tablet, mobile } from "@/styles/utils/mixins";

export const topStyle = css`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${tablet(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 84px;
  `)}

  ${mobile(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 48px 0 132px;
    height: 240px;
  `)}
`;

export const topSectionStyle = css`
  gap: 7px;
`;

export const topImg = css`
  width: 746px;
  height: 340px;

  ${tablet(css`
    width: 774px;
    height: 340px;
  `)}

  ${mobile(css`
    width: 100%;
    height: 100%;
  `)}
`;

export const itemsBtn = css`
  display: inline-block;
  background-color: var(--blue100);
  color: var(--gray100);
  border-radius: 40px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  padding: 16px 124px;
  text-decoration: none;

  ${mobile(css`
    padding: 12px 71px;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
  `)}
`;
