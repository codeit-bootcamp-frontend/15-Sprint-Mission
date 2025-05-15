import { css } from "@emotion/react";

export const formHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.4rem;
`;

export const submitButtonStyle = css`
  width: 7.4rem;
  height: 4.2rem;
  border-radius: 0.8rem;
  background: #3692ff;
  font-size: 1.6rem;
  font-weight: 600;
  color: #F3F4F6;

  &:disabled {
    background: #9CA3AF;
  }
`;