import { css } from "@emotion/react";

export const inputGroup = css`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 24px;
`;

export const passwordWrapper = css`
  position: relative;
  display: flex;
  align-items: center;
`;

export const passwordInput = css`
  width: 100%;
  height: 56px;
  margin-top: 16px;
  border: none;
  border-radius: 12px;
  background-color: var(--gray100);
  font-size: 16px;
  font-weight: 400;
  color: var(--gray800);
  padding: 16px 48px 14px 24px;

  &::placeholder {
    color: var(--gray400);
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }
`;

export const toggleIcon = css`
  position: absolute;
  right: 16px;
  top: 60%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
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
