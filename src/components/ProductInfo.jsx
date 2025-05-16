import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productApi";
import "./ProductInfo.css";
import userImage from "../assets/userImage.png";
import like from "../assets/like.png";
import ic_kebab from "../assets/ic_kebab.png";

const ProductInfo = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        console.error("상품 정보를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>로딩 중...</div>;

  return (
    <div className="product-info">
      <div className="product-info__image">
        <img src={product.images[0]} alt={product.name} />
      </div>

      <div className="product-info__details">
        <div className="product-info__header">
          <p className="product-info__name">{product.name}</p>
          <img src={ic_kebab} alt="ic_kebab" className="product-info__ic_kebab" />
        </div>
        <p className="product-info__price">{product.price.toLocaleString()}원</p>

        <div className="product-info__line" />

        <div className="product-info__description">
          <p className="product-info__intro">상품 소개</p>
          <p className="product-info__content">{product.description}</p>
        </div>

        <div className="product-info__tags">
          <h4>상품 태그</h4>
          <ul>
            {product.tags.map((tag, index) => (
              <li key={index}>#{tag}</li>
            ))}
          </ul>
        </div>

        <div className="product-info__meta">
          <div className="product-info__user">
            <img src={userImage} alt="user" className="product-info__user-image" />
            <div className="product-info__user-text">
              <span className="product-info__nickname">{product.ownerNickname}</span>
              <span className="product-info__date">{new Date(product.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="product-info__like-box">
            <img src={like} alt="like" className="product-info__like-icon" />
            <span className="product-info__like-count">{product.favoriteCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
