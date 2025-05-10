import { css } from "@emotion/react";
import { tablet, mobile, desktop, flexCenter } from "@/styles/utils/mixins";
export const flexColumnStart = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductDetailContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;

  height: auto;
  margin-bottom: 40px;
  color: var(--gray800);

  ${mobile(css`
    flex-direction: column;
  `)}
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
  width: 690px;
  gap: 62px;

  ${tablet(css`
    width: 340px;
  `)}

  ${mobile(css`
    width: 100%;
  `)}
`;

export const ProductDetailContentContainer = css`
  ${flexColumnStart}
  gap: 24px;
  align-self: stretch;

  h4 {
    color: var(--gray600);
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
  }
`;

export const ProductDetailNameContainer = css`
  ${flexColumnStart}
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid var(--gray200);
`;

export const ProductDetailName = css`
  ${flexColumnStart}
  margin-bottom: 16px;
  width: auto;
  gap: 16px;
  white-space: nowrap;

  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
  }

  h3 {
    font-size: 40px;
    font-weight: 600;
    line-height: normal;
  }

  ${tablet(css`
    gap: 8px;
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 32px;
      line-height: 42px;
    }
  `)}

  ${mobile(css`
    gap: 8px;
    h2 {
      font-size: 16px;
      line-height: 26px;
    }
    h3 {
      font-size: 24px;
      line-height: 32px;
    }
  `)}
`;

export const ProductDetailDescriptionContainer = css`
  ${flexColumnStart}
  gap: 16px;
  align-self: stretch;

  h4 {
    color: var(--gray600);
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
  }
`;

export const ProductDetailDescription = css`
  color: var(--gray600);
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  overflow: scroll;

  ${desktop(css`
    font-size: 16px;
    height: 104px;
  `)}
`;

export const ProductDetailTagsContainer = css`
  ${flexColumnStart}
  gap: 16px;
  align-self: stretch;
`;

export const ProductDetailTags = css`
  ${flexCenter}
  height: auto;
  gap: 10px;
  flex-wrap: wrap;

  span {
    border-radius: 26px;
    background: var(--gray100);
    padding: 6px 16px;

    color: var(--gray800);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    height: 36px;
  }

  ${tablet(css`
    gap: 8px;
  `)}
`;

export const ProductDetailOwnerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const ProductDetailOwner = css`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 40px;
    height: 40px;
  }
`;

export const ProductDetailOwnerName = css`
  ${flexColumnStart}
  gap: 2px;

  p {
    color: var(--gray600);
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const ProductDetailOwnerDate = css`
  color: var(--gray400);

  font-size: 14px;
  font-weight: 400;
`;

export const ProductDetailFavoriteButtonContainer = css`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ProductDetailFavoriteButton = css`
  display: flex;
  height: 40px;
  padding: 4px 12px;
  align-items: center;
  gap: 10px;

  border-radius: 35px;
  border: 1px solid var(--gray200);
  background: var(--white);

  img {
    width: 24px;
    height: 24px;
  }

  p {
    color: var(--gray600);
    font-size: 16px;
    font-weight: 400;
  }

  color: var(--gray500);
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
`;
