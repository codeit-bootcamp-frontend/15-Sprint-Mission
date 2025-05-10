import { useState } from 'react';
import { useAddItemForm } from '@/hooks';
import { ImageUploader, TagInput, AddItemForm } from '@/components/AddItem';
import Toast, { useToast } from '@/components/common/Toast';
import toastStyles from '@/components/common/Toast/Toast.module.scss';
import { addItemValidation } from '@/utils/validators';
import { baseUrl, ENDPOINTS } from '@/constants/urls';
import formStyles from '@/styles/helpers/formHelpers.module.scss';
import buttonStyles from '@/styles/helpers/buttonHelpers.module.scss';
import styles from './AddItem.module.scss';

const initialForm = {
  imageFile: null,
  productName: '',
  description: '',
  price: '',
  tags: [],
};

const AddItem = () => {
  const { showToast } = useToast();
  const { formData, isFormValid, handleInputChange } = useAddItemForm(
    initialForm,
    addItemValidation,
  );

  const [imagePreview, setImagePreview] = useState(null);
  const [showImageWarning, setShowImageWarning] = useState(false);
  const [tagInput, setTagInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('image', formData.imageFile);
    form.append('productName', formData.productName);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('tags', JSON.stringify(formData.tags));

    // * try.. catch 나중에 따로 빼던가 하기
    try {
      const res = await fetch(`${baseUrl}${ENDPOINTS.UPLOAD_IMAGE}`, {
        method: 'POST',
        body: form,
      });

      if (!res.ok) throw new Error('등록 실패'); // * throw하는 에러메시지 상수화, 콘솔메시지 상수화?
      showToast('상품이 등록되었습니다!', 'success'); // * 여기 나중에 상세페이지로 이동 처리
    } catch (err) {
      console.error(err);
      showToast('상품 등록에 실패했습니다.', 'err.message'); // * 여기 토스트 메시지(fetch찍어서 확인) 상수화
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <h2>상품 등록하기</h2>
        <button
          type="button"
          className={`${buttonStyles.primary} ${styles.submitButton}`}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          등록
        </button>
      </div>

      <form className={formStyles.form}>
        <ImageUploader
          handleInputChange={handleInputChange}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          showImageWarning={showImageWarning}
          setShowImageWarning={setShowImageWarning}
        />

        <AddItemForm
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <TagInput
          tagInput={tagInput}
          setTagInput={setTagInput}
          tags={formData.tags}
          handleInputChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default AddItem;
