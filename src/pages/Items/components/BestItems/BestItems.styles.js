import { css } from "@emotion/react";
import { tablet, mobile, desktop } from "@/styles/utils/mixins";

export const BestItemsContainer = css`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  color: var(--gray900);
  font-style: normal;
  font-weight: 500;
  margin: 0 auto;

  ${tablet(css`
    max-width: 696px;
  `)}

  ${mobile(css`
    max-width: 344px;
  `)}
`;

export const BestItemsTitle = css`
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  margin: 0;
`;

export const BestItemsGridContainer = css`
  display: flex;
  height: 482px;

  ${desktop(css`
    display: grid;
    height: 420px;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  `)}

  ${tablet(css`
    gap: 10px;
  `)}
`;

export const BestItemsImage = css`
  width: 578px;
  height: 387px;
  object-fit: cover;
  border-radius: 20px;
  background: var(--gray200) 50% / cover no-repeat;

  ${desktop(css`
    width: 476px;
    height: 318px;
  `)}
`;

export const BestItemsPrice = css`
  color: var(--gray800);

  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
`;

export const BestItemsHeart = css`
  width: 16px;
  height: 16px;
`;

export const ItemsContainer = css`
  width: 343px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  ${desktop(css`
    width: 282px;
  `)}
`;

export const BestItemsName = css`
  color: var(--gray800);
  font-size: 14px;
  line-height: 24px;
`;

export const BestItemsHeartContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  line-height: 18px;
`;
