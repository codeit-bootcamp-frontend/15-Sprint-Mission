import { css } from "@emotion/react";
import { tablet, desktop } from "@/styles/utils/mixins";

export const addItemImageContainer = css`
  width: 100%;
  gap: 16px;
`;

export const addItemImageButtonStyle = css`
  width: 168px;
  height: 168px;
  padding: 42px 47px;
  flex-shrink: 0;
  border-radius: 12px;
  gap: 12px;
  background: var(--gray200);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${desktop(css`
    width: 282px;
    height: 282px;
  `)}

  img {
    width: 48px;
    height: 48px;
  }

  p {
    color: var(--gray400);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;

export const addItemImageButtonContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 24px;

  ${tablet(css`
    gap: 16px;
  `)}
`;

export const previewImageContainer = css`
  position: relative;
`;

export const previewImageStyle = css`
  width: 168px;
  height: 168px;

  object-fit: cover;
  border-radius: 12px;
  ${desktop(css`
    width: 282px;
    height: 282px;
  `)}
`;

export const deleteImageStyle = css`
  cursor: pointer; // 삭제 아이콘에 커서 포인터 추가
  width: 20px;
  height: 20px;
  flex-shrink: 0;

  position: absolute;
  right: 12px;
  top: 12px;
`;
