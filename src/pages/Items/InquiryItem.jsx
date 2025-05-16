import styled from "@emotion/styled";
import { useState } from "react";

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 12px;
  background-color: #ffffff;

  font-family: Pretendard;
  font-size: 14px;
  line-height: 24px;
  color: #1f2937;
`;

const QuestionText = styled.div``;

const EditInput = styled.input`
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.div`
  font-weight: 600;
`;

const Time = styled.div`
  font-size: 12px;
  color: #9ca3af;
`;

const MenuButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  z-index: 1;
`;

const MenuItem = styled.div`
  padding: 8px 12px;
  font-size: 14px;
  color: #111827;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const InquiryItem = ({
  id,
  image,
  nickname,
  content,
  updatedAt,
  onEdit,
  onDelete,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(content);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(id, editText.trim());
      setIsEditing(false);
      setMenuOpen(false);
    }
  };

  return (
    <ItemWrapper>
      {isEditing ? (
        <EditInput
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <QuestionText>{content}</QuestionText>
      )}

      <UserInfo>
        <Avatar src={image} alt={nickname} />
        <UserWrapper>
          <Username>{nickname}</Username>
          <Time>{updatedAt}</Time>
        </UserWrapper>

        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>⋯</MenuButton>

        {menuOpen && (
          <Menu>
            {isEditing ? (
              <MenuItem onClick={handleSave}>저장</MenuItem>
            ) : (
              <>
                <MenuItem onClick={() => setIsEditing(true)}>수정하기</MenuItem>
                <MenuItem onClick={() => onDelete(id)}>삭제하기</MenuItem>
              </>
            )}
          </Menu>
        )}
      </UserInfo>
    </ItemWrapper>
  );
};

export default InquiryItem;
