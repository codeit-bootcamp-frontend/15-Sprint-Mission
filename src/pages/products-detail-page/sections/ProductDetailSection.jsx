import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { breakpoints } from "@constants/breakpoints";
import { getProduct } from "@apis/productApi";
import NotFoundImg from "@assets/imgs/notFoundImage@2x.png";
import Tag from "@pages/products-detail-page/components/Tag";
import WriterInfo from "@pages/products-detail-page/components/WriterInfo";
import DropdownMenu from "@/components/DropdownMenu";
import LikeButtonGroup from "../components/LikeButtonGroup";
import { useProductDetailHandlers } from "../hooks/useProductDetailHandlers";

const ProductDetailSection = ({ productId }) => {
  const imgRef = useRef(null);
  const [detailData, setDetailData] = useState({});
  const {
    name,
    price,
    description,
    tags,
    ownerNickname,
    updatedAt,
    favoriteCount,
    images,
  } = detailData;

  const { handleImgError, handleEditClick, handleDeleteClick } =
    useProductDetailHandlers(imgRef);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(productId);
        setDetailData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <ResponsiveLayout>
      <ProductImage
        ref={imgRef}
        src={images?.[0] || NotFoundImg}
        alt="상품 이미지"
        onError={handleImgError}
      />

      <ProductContentSection>
        <ProductHeader>
          <Title>{name}</Title>
          <Price>{Number(price).toLocaleString()}원</Price>
          <DropdownMenuWrapper>
            <DropdownMenu
              dropdownItem1="수정하기"
              onDropdownItem1Click={handleEditClick}
              dropdownItem2="삭제하기"
              onDropdownItem2Click={handleDeleteClick}
            />
          </DropdownMenuWrapper>
        </ProductHeader>

        <ProductDescriptionSection>
          <ProductDetailsTitle>상품 소개</ProductDetailsTitle>
          <ProductDetailsContent>{description}</ProductDetailsContent>
        </ProductDescriptionSection>

        <ProductDescriptionSection>
          <ProductDetailsTitle>상품 태그</ProductDetailsTitle>
          <ProductTagsContainer>
            {tags?.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </ProductTagsContainer>
        </ProductDescriptionSection>

        <ProductMetaSection>
          <WriterInfo
            profileImg={null}
            name={ownerNickname}
            updatedAt={updatedAt}
            size="m"
          />
          <LikeButtonGroup likeCount={favoriteCount} />
        </ProductMetaSection>
      </ProductContentSection>
    </ResponsiveLayout>
  );
};

export default ProductDetailSection;

const ResponsiveLayout = styled.div`
  padding-bottom: 2rem;
  display: flex;
  gap: 2rem;
  border-bottom: 1px solid var(--gray200);

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ProductImage = styled.img`
  width: 50%;
  height: 50%;
  max-width: 40rem;
  max-height: 40rem;
  border-radius: 1.6rem;
  object-fit: cover;
  aspect-ratio: 1/1;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;

const ProductContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ProductHeader = styled.div`
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  border-bottom: 1px solid var(--gray200);
`;

const Title = styled.h1`
  max-width: calc(100% - 4rem);
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 600;
`;

const Price = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 3.2rem;
  font-weight: 600;
`;

const DropdownMenuWrapper = styled.div`
  width: fit-content;
  position: absolute;
  top: 0;
  right: 0;
`;

const ProductDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductDetailsTitle = styled.h3`
  color: var(--gray600);
  font-size: 1.6rem;
  font-weight: 600;
`;

const ProductDetailsContent = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  line-height: 2.6rem;
  word-break: break-word;
`;

const ProductTagsContainer = styled.div`
  display: flex;
  gap: 0.7rem 0.5rem;
  flex-wrap: wrap;
`;

const ProductMetaSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
