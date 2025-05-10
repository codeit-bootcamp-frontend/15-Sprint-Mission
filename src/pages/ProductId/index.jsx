import ProductDetail from "./components/ProductDetail";
import ProductComment from "./components/ProductComment";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import backIcon from "/icons/ic_back.svg";
import { mobile, tablet, flexCenter } from "@/styles/utils/mixins";

function ProductId() {
  const navigate = useNavigate();
  return (
    <main css={ProductIdContainer}>
      <section css={ProductIdSection}>
        <ProductDetail />
        <ProductComment />
      </section>
      <button css={gotoListButton} onClick={() => navigate("/items")}>
        목록으로 돌아가기
        <img src={backIcon} alt="backIcon" />
      </button>
    </main>
  );
}

export default ProductId;

const ProductIdContainer = css`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 24px auto 222px;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  ${tablet(css`
    max-width: 696px;
    gap: 56px;
    margin-bottom: 243px;
  `)}

  ${mobile(css`
    max-width: 344px;
    gap: 40px;
    margin: 16px auto 65px;
  `)}
`;

const ProductIdSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  align-self: stretch;
`;

const gotoListButton = css`
  ${flexCenter}
  width: 240px;
  height: 48px;
  padding: 12px 64px;
  gap: 8px;

  border-radius: 40px;
  background: var(--blue100);

  color: var(--gray100);
  text-align: center;

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  white-space: nowrap;
`;
