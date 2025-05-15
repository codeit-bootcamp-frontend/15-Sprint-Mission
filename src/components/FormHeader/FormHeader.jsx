import * as S from './formHeader.styles';
import { titleStyle } from '../../styles/common';

const FormHeader = ({ isFormValid }) => {
  return (
    <div css={S.formHeaderStyle}>
      <h1 css={titleStyle}>상품 등록하기</h1>
      <button
        css={S.submitButtonStyle}
        type="submit"
        disabled={!isFormValid}
      >
        등록
      </button>
    </div>
  );
};

export default FormHeader;
