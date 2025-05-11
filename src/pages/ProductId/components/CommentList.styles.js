import { css } from "@emotion/react";
import { flexStart } from "@/styles/utils/mixins";

export const CommentListContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 24px;
`;

export const CommentListStyle = css`
  display: flex;
  width: 100%;
  padding-bottom: 12px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 4px;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--gray200);
  position: relative;
`;

export const CommentItemContainer = (isEditing) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${isEditing ? "16px" : "24px"};
  flex: 1 0 0;

  ${isEditing &&
  css`
    height: 167px;
  `}

  p {
    align-self: stretch;
    color: var(--gray800);
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const CommentProfile = css`
  width: 32px;
  height: 32px;
`;

export const SettingIconStyle = (isEditing) => css`
  width: 3px;
  height: 13px;
  flex-shrink: 0;
  margin-top: 5px;
  cursor: pointer;

  display: ${isEditing ? "none" : "block"};
`;

export const CommentProfileContainer = css`
  ${flexStart}
  gap: 8px;
`;

export const CommentProfileInfo = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  color: var(--gray600);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const CommentDate = css`
  color: var(--gray400);
`;

export const SettingContainer = css`
  ${flexStart}
  width: 139px;
  flex-direction: column;
  background: var(--white);
  position: absolute;
  top: 34px;
  right: 0;
`;

export const SettingButtonTop = css`
  height: 46px;
  padding: 16px 0px 12px 0px;
  gap: 10px;
  align-self: stretch;

  border-radius: 8px 8px 0px 0px;
  border-top: 1px solid var(--gray300);
  border-right: 1px solid var(--gray300);
  border-left: 1px solid var(--gray300);
`;

export const SettingButtonBottom = css`
  height: 46px;
  padding: 12px 17px 16px 17px;
  gap: 10px;
  align-self: stretch;

  border-radius: 0px 0px 8px 8px;
  border-right: 1px solid var(--gray300);
  border-bottom: 1px solid var(--gray300);
  border-left: 1px solid var(--gray300);
`;

export const CommentEditInput = css`
  display: flex;
  width: 100%;
  padding: 16px 24px;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;

  resize: none;
  border: none;
  border-radius: 12px;
  background: var(--gray100);

  &:hover {
    border: 1px solid var(--gray400);
  }

  color: var(--gray800);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

export const CommentBottomContainer = css`
  display: flex;
  height: 47px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
`;

export const CommentBottomButtonContainer = css`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--gray500);
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
`;

export const CancelButton = css`
  padding: 14px 20px 7px 20px;
  justify-content: center;
  align-items: center;
`;

export const SaveButton = css`
  display: flex;
  height: 42px;
  padding: 12px 23px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--blue100);

  color: var(--Cool-Gray-100, #f3f4f6);

  font-size: 16px;
  font-weight: 600;
`;
