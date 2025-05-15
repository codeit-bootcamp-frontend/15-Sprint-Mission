import { useState } from "react";
import styled from "@emotion/styled";
import BaseForm from "@/components/common/BaseForm";
import CommentTextareaField from "@pages/products-detail-page/components/CommentTextareaField";
import { useFormValidation } from "@pages/products-detail-page/hooks/useFormValidation";
import TextButton from "@/components/TextButton";

const CommentFormSection = () => {
  const [btnAvailable, setBtnAvailable] = useState(false);
  const [comment, setComment] = useState("");

  useFormValidation(comment, setBtnAvailable);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
  };

  return (
    <CommentFormLayout>
      <BaseForm onSubmit={handleSubmit}>
        <CommentTextareaField value={comment} onChange={setComment} />

        <ButtonWrapper>
          <TextButton text="등록" disabled={!btnAvailable} size="l" />
        </ButtonWrapper>
      </BaseForm>
    </CommentFormLayout>
  );
};

export default CommentFormSection;

const CommentFormLayout = styled.div`
  margin-top: 4rem;
`;

const ButtonWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  display: block;
`;
