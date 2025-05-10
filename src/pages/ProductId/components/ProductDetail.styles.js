import { css } from "@emotion/react";
import { tablet, mobile, desktop } from "@/styles/utils/mixins";
export const flexColumnStart = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductDetailContainer = css`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;

  width: 100%;
  max-width: 1200px;
  height: 496px;
  margin-bottom: 40px;
  color: var(--gray800);
`;

export const ProductDetailImage = css`
  width: 340px;
  height: 340px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 20px;
  background: var(--gray200) 50%;
  overflow: hidden;

  ${desktop(css`
    width: 496px;
    height: 496px;
  `)}
`;

export const ProductDetailContent = css`
  ${flexColumnStart}
  width: 100%;
  max-width: 690px;
  gap: 62px;
`;

export const ProductDetailContentContainer = css`
  ${flexColumnStart}
  gap: 24px;
  align-self: stretch;
`;

export const ProductDetailName = css`
  ${flexColumnStart}
  width: 199px;
  gap: 16px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
  }

  h3 {
    font-size: 40px;
    font-weight: 600;
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
