import formStyles from '@/styles/helpers/formHelpers.module.scss';

const AddItemForm = ({
  productName,
  setProductName,
  description,
  setDescription,
  price,
  setPrice,
}) => {
  return (
    <>
      <div className={formStyles.inputContainer}>
        <label htmlFor="productName" className={formStyles.labelText}>
          상품명
        </label>
        <input
          id="productName"
          type="text"
          value={productName}
          placeholder="상품명을 입력해주세요"
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      <div className={formStyles.inputContainer}>
        <label htmlFor="productDescription" className={formStyles.labelText}>
          상품 소개
        </label>
        <textarea
          id="productDescription"
          value={description}
          placeholder="상품 소개를 입력해주세요"
          onChange={(e) => setDescription(e.target.value)}
          rows={10}
        />
      </div>

      <div className={formStyles.inputContainer}>
        <label htmlFor="productPrice" className={formStyles.labelText}>
          판매 가격
        </label>
        <input
          id="productPrice"
          type="number"
          value={price}
          placeholder="판매 가격을 입력해주세요"
          onChange={(e) => {
            const value = e.target.value;
            if (value === '' || /^\d+$/.test(value)) {
              setPrice(value);
            }
          }}
          min="0"
          step="10"
          onWheel={(e) => e.target.blur()}
        />
      </div>
    </>
  );
};

export default AddItemForm;
