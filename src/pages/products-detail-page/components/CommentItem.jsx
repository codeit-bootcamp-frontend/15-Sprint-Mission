import { useState } from "react";
import styled from "@emotion/styled";
import CommentTextareaField from "@pages/products-detail-page/components/CommentTextareaField";
import DropdownMenu from "@/components/DropdownMenu";
import WriterInfo from "@pages/products-detail-page/components/WriterInfo";
import TextButton from "@/components/TextButton";
import { useCommentItemHandlers } from "@pages/products-detail-page/hooks/useCommentItemHandlers";

const CommentItem = ({ data }) => {
  const [comment, setComment] = useState(data.content);
  const [isEdit, setIsEdit] = useState(false);

  const { cancelEdit, confirmEdit, handleEditClick, handleDeleteClick } =
    useCommentItemHandlers(setIsEdit);

  return (
    <CommentItemLayout isEdit={isEdit}>
      {isEdit ? (
        <CommentTextareaField
          value={comment}
          onChange={setComment}
          isEdit={isEdit}
        />
      ) : (
        <CommentContainer>
          <Comment>{comment}</Comment>
          <DropdownMenu
            dropdownItem1="수정하기"
            onDropdownItem1Click={handleEditClick}
            dropdownItem2="삭제하기"
            onDropdownItem2Click={handleDeleteClick}
          />
        </CommentContainer>
      )}

      <ProductMetaSection>
        <WriterInfo
          profileImg={data.writer.image}
          name={data.writer.nickname}
          updatedAt={data.updatedAt}
          size="s"
        />
        {isEdit && (
          <ActionButtons>
            <TextButton
              text="취소"
              onClick={cancelEdit}
              size="m"
              type="cancel"
            />
            <TextButton text="수정 완료" onClick={confirmEdit} size="m" />
          </ActionButtons>
        )}
      </ProductMetaSection>
    </CommentItemLayout>
  );
};

export default CommentItem;

const CommentItemLayout = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid var(--gray200);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

const Comment = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
  flex: 1;
`;

const ProductMetaSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 1rem;
`;
