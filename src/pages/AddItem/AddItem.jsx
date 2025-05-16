import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddItemForm } from '@/hooks';
import { useToast } from '@/contexts';
import { postProduct, uploadImage } from '@/api/product';
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

    try {
      // 1단계: 이미지 업로드
      const imageForm = new FormData();
      imageForm.append('image', formData.imageFile);

      const { imageUrl } = await uploadImage(imageForm);

      // 2단계: 상품 등록
      const productForm = new FormData();
      productForm.append('imageUrl', imageUrl);
      productForm.append('productName', formData.productName);
      productForm.append('description', formData.description);
      productForm.append('price', formData.price);
      productForm.append('tags', JSON.stringify(formData.tags));

      const data = await postProduct(productForm);

      showToast(
        data.message || PRODUCT_SUCCESS_MESSAGES.ADD_ITEM_SUCCESS,
        'success',
      );
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
