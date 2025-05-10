import { useParams } from "react-router-dom";
import { productIdAPI } from "@/api/productIdAPI";
import { useEffect, useState } from "react";
import heartIcon from "/icons/ic_heart.svg";
import ownerImage from "/icons/profile.png";
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
  ProductDetailTagsContainer,
} from "./ProductDetail.styles";
import defaultImage from "/images/Img_default.png";
import settingIcon from "/icons/ic_setting.svg";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <img src={ownerImage} alt="ownerImage" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>{product.ownerNickname}</p>
              <p>{new Date(product.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <button>
            <img src={heartIcon} alt="heartIcon" />
            <p>{product.favoriteCount}</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
