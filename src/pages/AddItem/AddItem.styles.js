import { css } from "@emotion/react";
import { tablet, mobile, desktop } from "@/styles/utils/mixins";

export const addItemContainer = css`
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
  margin: 24px auto;

  ${tablet(css`
    max-width: 696px;
    margin: 16px auto;
  `)}

  ${mobile(css`
    max-width: 346px;
    margin: 24px auto;
  `)}
`;

export const inputFieldContainer = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 76px;

  ${desktop(css`
    gap: 32px;
    margin-bottom: 69px;
  `)}

  ${mobile(css`
    margin-bottom: 70px;
  `)}
`;

export const tagContainer = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const tagStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px 6px 16px;

  gap: 10px;
  border-radius: 26px;
  background: var(--gray100);
`;

export const closeIconStyle = css`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
