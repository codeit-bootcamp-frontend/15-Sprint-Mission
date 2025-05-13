/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mobile } from "@/styles/utils/mixins";

export const inputGroup = css`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 24px;
`;

export const authInput = css`
  width: 100%;
  height: 56px;
  margin-top: 16px;
  border: none;
  border-radius: 12px;
  gap: 10px;
  background-color: var(--gray100);
  font-size: 16px;
  font-weight: 400;
  color: var(--gray800);
  padding: 16px 24px 14px;

  &::placeholder {
    color: var(--gray400);
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0%;
  }

  ${mobile(css`
    width: 100%;
  `)}
`;

export const message = css`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin-top: 8px;
  margin-left: 16px;
  color: var(--red);
  height: 24px;
`;
