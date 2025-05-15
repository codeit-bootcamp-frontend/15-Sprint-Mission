import { titleStyle } from "../../styles/common";
import Button from "../Button/Button";
import * as S from './TooBar.styles';
import searchImg from '../../assets/icons/ic_search.png'

function Toolbar({onChange, onSearch}) {
  return (
    <div css={S.toolbarStyle}>
      <h2 css={[titleStyle, S.titleStyle]}>전체 상품</h2>
      <div css={S.inputContainerStyle}>
        <input css={S.inputStyle} onChange={onSearch} placeholder="검색할 상품을 입력해주세요" />
        <img css={S.iconStyle} src={searchImg} />
      </div>
      <Button style={S.buttonStyle} link="/additem">상품 등록하기</Button>
        <select css={S.selectStyle} onChange={onChange}>
          <option value="recent">최신 순</option>
          <option value="favorite">좋아요 순</option>
        </select>
    </div>
  );
}

export default Toolbar;
