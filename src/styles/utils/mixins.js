/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// 미디어 쿼리 믹스인들
export const desktop = (style) => css`
  @media (min-width: 1200px) {
    ${style};
  }
`;

export const tablet = (style) => css`
  @media (min-width: 768px) and (max-width: 1199px) {
    ${style};
  }
`;

export const mobile = (style) => css`
  @media (max-width: 767px) {
    ${style};
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
