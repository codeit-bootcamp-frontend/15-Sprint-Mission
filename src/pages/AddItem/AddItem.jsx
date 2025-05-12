import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddItemForm } from '@/hooks';
import { useToast } from '@/contexts';
import { ImageUploader, TagInput, AddItemForm } from '@/components/AddItem';
import { addItemValidation } from '@/utils/validators';
import { safeFetch } from '@/utils/api';
import { postProductErrorMessage } from '@/utils/errorMessage';
import { baseUrl, ENDPOINTS, ROUTES } from '@/constants/urls';
import { PRODUCT_SUCCESS_MESSAGES } from '@/constants/messages';
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
  const navigate = useNavigate();
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

    try {
      const data = await safeFetch({
        url: `${baseUrl}${ENDPOINTS.UPLOAD_IMAGE}`,
        options: {
          method: 'POST',
          body: form,
        },
      });

      showToast(
        `${data.message || PRODUCT_SUCCESS_MESSAGES.ADD_ITEM_SUCCESS}`,
        'success',
      );

      // 등록 성공 후 상세 페이지로 이동 처리
      navigate(`${ROUTES.ITEMS}/${data.id}`);
    } catch (error) {
      showToast(postProductErrorMessage(error.status), 'error');
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
