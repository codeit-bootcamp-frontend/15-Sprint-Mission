import * as S from './formInputs.styles';

const FormInputs = ({ name, onNameChange, description, onDescriptionChange, price, onPriceChange }) => {
  return (
    <>
      <label>상품명</label>
      <input
        css={S.inputStyle}
        placeholder="상품명을 입력해주세요"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <label>상품 소개</label>
      <textarea
        css={S.areaStyle}
        placeholder="상품 소개를 입력해주세요"
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
      />

      <label>판매 가격</label>
      <input
        type="number"
        css={S.inputStyle}
        placeholder="판매 가격을 입력해주세요"
        value={price}
        onChange={(e) => onPriceChange(e.target.value)}
      />
    </>
  );
};

export default FormInputs;
