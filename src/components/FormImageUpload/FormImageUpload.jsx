import * as S from './formImageUpload.styles';
import plusImg from '../../assets/icons/ic_plus.png';

const FormImageUpload = ({
  imagePreview,
  onClick,
  onChange,
  onRemove,
  errorMessage,
  fileInputRef
}) => {
  return (
    <>
      <label>상품 이미지</label>
      <div css={S.imageContainerStyle}>
        <div css={S.formImageBoxStyle} onClick={onClick}>
          <img src={plusImg} alt="plus" />
          <p>이미지 등록</p>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={onChange}
            style={{ display: 'none' }}
          />
        </div>

        {imagePreview && (
          <div css={S.itemPreviewContainerStyle}>
            <img src={imagePreview} alt="preview" css={S.previewImageStyle} />
            <button
              onClick={onRemove}
              type="button"
              css={S.imageCloseButtonStyle}
            />
          </div>
        )}
      </div>

      {errorMessage && <p css={S.errorMessageStyle}>{errorMessage}</p>}
    </>
  );
};

export default FormImageUpload;
