import styled from "@emotion/styled";
import { useState } from "react";

const UploadContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const UploadBox = styled.label`
  width: 100%;
  max-width: 282px;
  aspect-ratio: 1 / 1; /* 정사각형 비율 유지 */
  border-radius: 16px;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 16px;
    color: #9ca3af;
    margin-top: 8px;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const PreviewWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 282px;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  overflow: hidden;
`;
const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ImageUpload = () => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const handleDelete = () => {
    setPreview(null);
  };

  return (
    <UploadContainer>
      <UploadBox htmlFor="image-upload">
        <div style={{ fontSize: "40px", color: "#9ca3af" }}>＋</div>
        <span>이미지 등록</span>
      </UploadBox>

      <FileInput
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleFileChange}
      />

      {preview && (
        <PreviewWrapper>
          <PreviewImage src={preview} alt="미리보기" />
          <DeleteButton onClick={handleDelete}>✕</DeleteButton>
        </PreviewWrapper>
      )}
    </UploadContainer>
  );
};

export default ImageUpload;
