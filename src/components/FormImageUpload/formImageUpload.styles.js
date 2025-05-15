import { css } from "@emotion/react";
import mq from "../../styles/media";
import { closeButtonStyle } from '../../styles/common';

export const imageContainerStyle = css`
  display: flex;
  gap: 2.4rem;
`;

export const formImageBoxStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 16.8rem;
  height: 16.8rem;
  background-color: #F3F4F6;

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: #9CA3AF;
  }

  img {
    width: 4.8rem;
    height: 4.8rem;
  }

  ${mq({
    width: ['16.8rem', '16.8rem', '28.2rem', '28.2rem'],
    height: ['16.8rem', '16.8rem', '28.2rem', '28.2rem'],
  })}
`;

export const itemPreviewContainerStyle = css`
  position: relative;
`;

export const previewImageStyle = css`
  width: 16.8rem;
  height: 16.8rem;
  object-fit: cover;
  object-position: center;

  ${mq({
    width: ['16.8rem', '16.8rem', '28.2rem', '28.2rem'],
    height: ['16.8rem', '16.8rem', '28.2rem', '28.2rem'],
  })}
`;

export const imageCloseButtonStyle = css`
  ${closeButtonStyle};
  position: absolute;
  top: 3%;
  right: 3%;
  width: 2.4rem;
  height: 2.4rem;
`;

export const errorMessageStyle = css`
  color: red;
  font-size: 1.6rem;
  margin-top: 1.6rem;
`;