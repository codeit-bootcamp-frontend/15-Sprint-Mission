import { useState } from 'react';
import { useAddItemForm } from '@/hooks';
import { ImageUploader, TagInput, AddItemForm } from '@/components/AddItem';
import { useToast } from '@/components/common/Toast';
import { addItemValidation } from '@/utils/validators';
import { safeFetch } from '@/utils/api';
import { baseUrl, ENDPOINTS } from '@/constants/urls';
import {
  PRODUCT_ERROR_MESSAGES,
  PRODUCT_SUCCESS_MESSAGES,
} from '@/constants/messages';
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

    const data = await safeFetch({
      url: `${baseUrl}${ENDPOINTS.UPLOAD_IMAGE}`,
      options: {
        method: 'POST',
        body: form,
      },
      showToast,
      uiErrorMessage: PRODUCT_ERROR_MESSAGES.ADD_ITEM_FAILED,
    });

    showToast(
      `${data.message || PRODUCT_SUCCESS_MESSAGES.ADD_ITEM_SUCCESS}`,
      'success',
    );
    // TODO: 등록 성공 후 상세 페이지로 이동 처리
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
