import { useParams, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import ProductDetailSection from "@/pages/products-detail-page/sections/ProductDetailSection";
import CommentFormSection from "@/pages/products-detail-page/sections/CommentFormSection";
import CommentItemsSection from "@/pages/products-detail-page/sections/CommentItemsSection";
import BackIcon from "@assets/icons/back";
import RightIconButton from "@/components/RightIconButton";

const ProductsDetailPage = () => {
  const navigate = useNavigate();
  const { id: productId } = useParams();

  const handleNavigateToList = () => {
    navigate("/items");
  };

  return (
    <>
      <ProductDetailSection productId={productId} />
      <CommentFormSection />
      <CommentItemsSection productId={productId} />
      <ButtonWrapper>
        <RightIconButton
          text="목록으로 돌아가기"
          onClick={handleNavigateToList}
          icon={<BackIcon />}
          size="l"
          rounded
        />
      </ButtonWrapper>
    </>
  );
};

export default ProductsDetailPage;

const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 2rem auto 0 auto;
`;
