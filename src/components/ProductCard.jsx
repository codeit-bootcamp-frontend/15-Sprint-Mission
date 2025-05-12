import { useContext, createContext, useRef } from "react";
import styled from "@emotion/styled";
import HeartIcon from "@assets/icons/heart";
import NotFoundImg from "@assets/imgs/notFoundImage@2x.png";

const ProductContext = createContext({
  id: null,
  src: "",
  title: "",
  price: 0,
  like: 0,
});

const ProductCard = ({ id, src, title, price = 0, like = 0, children }) => {
  const contextValue = {
    id,
    src,
    title,
    price,
    like,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      <ProductCardLayout>
        <ProductImg />
        <ProductTitle />
        <ProductPrice />
        <ProductLike />
        {children}
      </ProductCardLayout>
    </ProductContext.Provider>
  );
};

const ProductImg = () => {
  const { src } = useContext(ProductContext);
  const imgRef = useRef(null);

  const handleImgError = () => {
    if (imgRef.current && imgRef.current.src !== NotFoundImg) {
      imgRef.current.src = NotFoundImg;
    }
  };

  return (
    <Img
      src={src || NotFoundImg}
      ref={imgRef}
      onError={handleImgError}
      alt="상품 이미지"
    ></Img>
  );
};

const ProductTitle = () => {
  const { title } = useContext(ProductContext);

  return <Title>{title}</Title>;
};

const ProductPrice = () => {
  const { price } = useContext(ProductContext);

  return <Price>{price.toLocaleString()}원</Price>;
};

const ProductLike = () => {
  const { like } = useContext(ProductContext);

  return (
    <LikeContainer>
      <HeartIcon />
      <Like>{like.toLocaleString()}</Like>
    </LikeContainer>
  );
};

ProductCard.ProductImg = ProductImg;
ProductCard.ProductTitle = ProductTitle;
ProductCard.ProductPrice = ProductPrice;
ProductCard.ProductLike = ProductLike;

export default ProductCard;

const ProductCardLayout = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--gray800);
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const Title = styled.h3`
  font-weight: normal;
  font-size: 1.4rem;
  color: var(--gray800);

  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.h2`
  font-weight: bold;
  font-size: 1.6rem;
  color: var(--gray800);
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--gray600);
`;

const Like = styled.p`
  font-weight: normal;
  font-size: 1.2rem;
`;
