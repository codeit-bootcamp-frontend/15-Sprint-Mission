import { memo } from "react";
import styled from "@emotion/styled";
import BaseImageInput from "@/components/common/BaseImageInput";
import DeleteButton from "@components/DeleteButton";
import PlusIcon from "@assets/icons/plus";

const ImageInputField = ({
  id,
  label,
  imageUrl,
  onChange,
  onDelete,
  ...props
}) => {
  return (
    <InputSection>
      <Label>{label}</Label>
      <ImageInputContainer>
        <ImageLabel htmlFor={id}>
          <PlusIcon />
          <p>이미지 등록</p>
          <BaseImageInput id={id} onChange={onChange} {...props} />
        </ImageLabel>

        {imageUrl && (
          <PreviewImageContainer>
            <PreviewImage src={imageUrl} alt="미리보기" />
            <DeleteButtonWrapper>
              <DeleteButton onClick={onDelete} size="m" />
            </DeleteButtonWrapper>
          </PreviewImageContainer>
        )}
      </ImageInputContainer>
    </InputSection>
  );
};

export default memo(ImageInputField);

const InputSection = styled.div`
  margin: 2rem 0;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 3.2rem;
  color: var(--gray900);
  font-size: 1.8rem;
`;

const ImageLabel = styled.label`
  width: 45%;
  height: 45%;
  max-width: 20rem;
  max-height: 20rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  aspect-ratio: 1 / 1;
  border-radius: 1.2rem;
  background-color: var(--gray100);
  cursor: pointer;

  p {
    font-size: 1.4rem;
    color: var(--gray300);
  }

  &:hover {
    opacity: 0.7;
  }
`;

const ImageInputContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const PreviewImageContainer = styled.div`
  width: 45%;
  height: 45%;
  max-width: 20rem;
  max-height: 20rem;
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-color: var(--white);
  border: 1px solid var(--gray100);
  border-radius: 1.2rem;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const DeleteButtonWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
