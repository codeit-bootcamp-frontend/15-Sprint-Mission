// src/pages/Home/styles/HomeBottomSection.styles.js
import { css } from "@emotion/react";
import { tablet, mobile } from "@/styles/utils/mixins";

export const bottomSectionStyle = css`
  gap: 69px;

  ${tablet(css`
    height: 927px;
  `)}
`;

export const bottomStyle = css`
  margin: 112.5px 0;

  ${tablet(css`
    width: 295px;
    height: 112px;
    margin: 201px 0 0;
  `)}
`;

export const bottomImgStyle = css`
  width: 746px;
  height: 397px;

  ${mobile(css`
    width: 375px;
    height: 198px;
  `)}
`;
