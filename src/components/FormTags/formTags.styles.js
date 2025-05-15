import { css } from "@emotion/react";
import { closeButtonStyle } from '../../styles/common';

export const tagListContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export const tagItemStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: #f2f2f2;
  padding: 0.6rem 1.2rem;
  border-radius: 26px;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const tagButtonStyle = css`
  ${closeButtonStyle};
  width: 2rem;
  height: 2rem;
`;