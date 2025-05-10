import { useEffect } from 'react';
import { RemoveIcon } from '@/components/common/Buttons';
import { INFO_MESSAGES } from '@/constants/messages';
import plusIcon from '@/assets/icons/plus.svg';
import formStyles from '@/styles/helpers/formHelpers.module.scss';
import styles from './ImageUploader.module.scss';

const ImageUploader = ({
  handleInputChange,
  imagePreview,
  setImagePreview,
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

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);

    handleInputChange({ field: 'imageFile', value: file });
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
    if (imagePreview?.startsWith('blob:')) {
      URL.revokeObjectURL(imagePreview);
    }
    setImagePreview(null);

    // formData에서 imageFile도 제거
    handleInputChange({ field: 'imageFile', value: null });
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
            <RemoveIcon
              onClick={handleRemoveImage}
              className="removeIconImage"
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
