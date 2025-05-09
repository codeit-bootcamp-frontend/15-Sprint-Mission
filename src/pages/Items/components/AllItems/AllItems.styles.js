import { css } from "@emotion/react";
import { tablet, mobile } from "@/styles/utils/mixins";

export const AllItemsHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const AllItemsGridContainer = css`
  display: grid;
  height: 317px;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;

  ${tablet(css`
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  `)}

  ${mobile(css`
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    height: 264px;
  `)}
`;

export const AllItemsContainer = css`
  width: 221px;
  height: 317px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  ${mobile(
    css`
      width: 168px;
      height: 264px;
    `
  )}
`;

export const AllItemsImage = css`
  width: 309px;
  height: 463px;
  object-fit: cover;
  border-radius: 20px;
  background: var(--gray200) 50% / cover no-repeat;

  ${tablet(css`
    width: 370px;
    height: 248px;
  `)}

  ${mobile(css`
    width: 311px;
    height: 207px;
  `)}
`;
