import { useEffect } from 'react';
import { INFO_MESSAGES } from '@/constants/messages';
import plusIcon from '@/assets/icons/plus.svg';
import buttonStyles from '@/styles/helpers/buttonHelpers.module.scss';
import formStyles from '@/styles/helpers/formHelpers.module.scss';
import styles from './ImageUploader.module.scss';

const ImageUploader = ({
  imagePreview,
  setImagePreview,
  setImageFile,
  showImageWarning,
  setShowImageWarning,
}) => {
  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith('blob:')) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    /**
     * URL.createObjectURL(file)은 브라우저 내부에서
     * 메모리에 저장된 파일을 참조할 수 있는 임시 URL을 만들어주는 함수.
     * 업로드 없이도 파일을 브라우저에서 즉시 렌더링할 수 있다.
     * 이 URL은 브라우저 메모리에 있기 때문에,
     * 직접 URL.revokeObjectURL()을 호출해 해제해야 한다. 안 그러면 메모리 누수가 생길 수 있다.
     * */
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    setImageFile(file);
  };

  const handleUploadClick = (e) => {
    if (imagePreview) {
      e.preventDefault();
      setShowImageWarning(true);
      return;
    }
    setShowImageWarning(false);
  };

  const handleRemoveImage = () => {
    if (imagePreview && imagePreview.startsWith('blob:')) {
      URL.revokeObjectURL(imagePreview);
    }
    setImagePreview(null);
    setImageFile(null);
  };

  return (
    <div className={formStyles.inputContainer}>
      <label htmlFor="productImg" className={formStyles.labelText}>
        상품 이미지
      </label>
      <div className={styles.uploadBox}>
        <label className={styles.imageUpload} onClick={handleUploadClick}>
          <img src={plusIcon} alt="Add product image" />
          <p>이미지 등록</p>
          <input
            id="productImg"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
            disabled={!!imagePreview}
          />
        </label>

        {imagePreview && (
          <div className={styles.imagePreview}>
            <img src={imagePreview} alt="Preview product image" />
            <button
              type="button"
              className={`${buttonStyles.removeIcon} ${styles['removeIcon--image']}`}
              onClick={handleRemoveImage}
              aria-label="Delete an image"
            />
          </div>
        )}
      </div>
      {showImageWarning && (
        <p className={styles.warningMessage}>{INFO_MESSAGES.maxImageCount}</p>
      )}
    </div>
  );
};

export default ImageUploader;
