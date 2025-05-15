import { css } from "@emotion/react";
import closeImg from '../assets/icons/ic_X.png';

export const titleStyle = css`
  font-size: 2rem;
  font-weight: 700;
`;

export const closeButtonStyle = css`
  background-image: url(${closeImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  border: none;
`;


