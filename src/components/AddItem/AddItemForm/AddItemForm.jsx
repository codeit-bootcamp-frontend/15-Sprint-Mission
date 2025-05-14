import formStyles from '@/styles/helpers/formHelpers.module.scss';

const AddItemForm = ({ formData, handleInputChange }) => {
  return (
    <>
      <div className={formStyles.inputContainer}>
        <label htmlFor="productName" className={formStyles.labelText}>
          상품명
        </label>
        <input
          id="productName"
          type="text"
          value={formData.productName}
          placeholder="상품명을 입력해주세요"
          className={formStyles.input}
          onChange={(e) =>
            handleInputChange({ field: 'productName', value: e.target.value })
          }
        />
      </div>

      <div className={formStyles.inputContainer}>
        <label htmlFor="productDescription" className={formStyles.labelText}>
          상품 소개
        </label>
        <textarea
          id="productDescription"
          value={formData.description}
          placeholder="상품 소개를 입력해주세요"
          className={formStyles.textarea}
          rows={10}
          onChange={(e) =>
            handleInputChange({ field: 'description', value: e.target.value })
          }
        />
      </div>

      <div className={formStyles.inputContainer}>
        <label htmlFor="productPrice" className={formStyles.labelText}>
          판매 가격
        </label>
        <input
          id="productPrice"
          type="number"
          value={formData.price}
          placeholder="판매 가격을 입력해주세요"
          className={formStyles.input}
          min="0"
          step="10"
          onWheel={(e) => e.target.blur()}
          onChange={(e) => {
            const value = e.target.value;
            if (value === '' || /^\d+$/.test(value)) {
              handleInputChange({ field: 'price', value });
            }
          }}
        />
      </div>
    </>
  );
};

export default AddItemForm;
