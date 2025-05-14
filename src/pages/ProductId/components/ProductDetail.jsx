import { useParams } from "react-router-dom";
import { productIdAPI } from "@/api/productIdAPI";
import { useEffect, useState } from "react";
import heartIcon from "/icons/ic_heart.svg";
import heartFillIcon from "/icons/ic_heart_fill.png";
import ownerImage from "/icons/profile.png";
import lineSvg from "/icons/ic_line.svg";

import {
  ProductDetailContainer,
  ProductDetailImage,
  ProductDetailContent,
  ProductDetailContentContainer,
  ProductDetailName,
  ProductDetailNameContainer,
  ProductDetailDescription,
  ProductDetailDescriptionContainer,
  ProductDetailTags,
  ProductDetailOwnerContainer,
  ProductDetailTagsContainer,
  ProductDetailOwner,
  ProductDetailOwnerName,
  ProductDetailOwnerDate,
  ProductDetailFavoriteButton,
  ProductDetailFavoriteButtonContainer,
} from "./ProductDetail.styles";
import defaultImage from "/images/Img_default.png";
import settingIcon from "/icons/ic_setting.svg";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productInfo = await productIdAPI.getProductId(productId);
        setProduct(productInfo);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>로딩 중...</div>;
  }

  return (
    <section css={ProductDetailContainer}>
      <img
        src={product.images[0]}
        alt={product.name}
        css={ProductDetailImage}
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />
      <div css={ProductDetailContent}>
        <div css={ProductDetailContentContainer}>
          <div css={ProductDetailNameContainer}>
            <div css={ProductDetailName}>
              <h2>{product.name}</h2>
              <h3>{product.price?.toLocaleString()}원</h3>
            </div>
            <img src={settingIcon} alt="설정" />
          </div>
          <div css={ProductDetailDescriptionContainer}>
            <h4>상품 소개</h4>
            <p css={ProductDetailDescription}>{product.description}</p>
          </div>
          <div css={ProductDetailTagsContainer}>
            <h4>상품 태그</h4>
            <div css={ProductDetailTags}>
              {product.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div css={ProductDetailOwnerContainer}>
          <div css={ProductDetailOwner}>
            <img src={ownerImage} alt="ownerImage" />
            <div css={ProductDetailOwnerName}>
              <p>{product.ownerNickname}</p>
              <div css={ProductDetailOwnerDate}>
                {new Date(product.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div css={ProductDetailFavoriteButtonContainer}>
            <img src={lineSvg} alt="line" />
            <button css={ProductDetailFavoriteButton} onClick={handleFavorite}>
              <img
                src={isFavorite ? heartFillIcon : heartIcon}
                alt="heartIcon"
              />
              <p>{product.favoriteCount}</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
