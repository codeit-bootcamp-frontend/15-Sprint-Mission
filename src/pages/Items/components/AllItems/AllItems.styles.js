import { css } from "@emotion/react";
import { tablet, mobile } from "@/styles/utils/mixins";

export const AllItemsHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;

  ${mobile(css`
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 0;
  `)}
`;

export const AllItemsTopRow = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const AllItemsBottomRow = css`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
`;

export const AllItemsGridContainer = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  font-style: normal;

  ${tablet(css`
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  `)}

  ${mobile(css`
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  `)}
`;

export const AllItemsContainer = css`
  width: 221px;
  height: 317px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  ${mobile(css`
    width: 168px;
    height: 264px;
  `)}
`;

export const AllItemsImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  background: var(--gray200) 50%;
`;

export const AllItemsFilterButton = css`
  display: flex;
  height: 42px;
  padding: 12px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--gray200);
  background: var(--white);
  flex-shrink: 0;
  width: 130px;
  cursor: pointer;

  ${mobile(css`
    width: 42px;
    height: 42px;
    padding: 9px;
    justify-content: center;
  `)}
`;

export const AllItemsFilterIcon = css`
  width: 13px;
  height: 11px;
`;

export const AllItemsFilterContainer = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

export const AllItemsSearchContainer = css`
  display: flex;
  position: relative;
  flex-grow: 1;
`;

export const AllItemsSearchInput = css`
  width: 325px;
  height: 42px;
  padding: 9px 20px 9px 44px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 12px;
  background: var(--gray100);
  color: var(--gray400);
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  ${tablet(css`
    width: 250px;
  `)}

  ${mobile(css`
    width: 100%;
  `)}
`;

export const AllItemsSearchIcon = css`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  padding: 0px;
  margin: 0px;
`;

export const AllItemsAddItemButton = css`
  display: flex;
  height: 42px;
  padding: 12px 23px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 8px;
  background: var(--blue100);
  color: var(--gray100);
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  white-space: nowrap;
  text-decoration: none;

  ${mobile(css`
    padding: 8px 12px;
    font-size: 14px;
  `)}
`;

// 정렬 메뉴 스타일
export const AllItemsSortMenu = css`
  position: absolute;
  top: 100%;
  right: 0;
  width: 130px;
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  margin-top: 4px;
  z-index: 10;
  overflow: hidden;

  ${mobile(css`
    width: 100px;
  `)}
`;

export const AllItemsSortOption = css`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background: var(--white);
  border: none;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background: var(--gray100);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray200);
  }
`;
