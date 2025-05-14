import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../../api/getProduct";
import "./ProductInfo.css";

import profile from "../../../../assets/images/ic_profile.svg";
import heart from "../../../../assets/images/ic_heart.svg";
import fallback from "../../../../assets/images/fallback.png";

const ProductInfo = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItemInfo() {
      const item = await getProduct({ id });
      setItem(item);
      setLoading(false);
    }

    getItemInfo();
  }, []);

  return (
    <>
      {loading ? (
        <div className="product-info">
          <div className="image-section">
            <div className="skeleton image"></div>
          </div>
          <div className="text-section">
            <div className="item-info">
              <div className="item-header">
                <div
                  className="skeleton text"
                  style={{ height: "25px", width: "60%" }}
                ></div>
                <div
                  className="skeleton text"
                  style={{ height: "35px", width: "30%" }}
                ></div>
              </div>
              <div className="item-description">
                <h3>상품 소개</h3>
                <div className="skeleton text" style={{ width: "90%" }}></div>
                <div className="skeleton text" style={{ width: "80%" }}></div>
                <div className="skeleton text" style={{ width: "70%" }}></div>
              </div>
              <div className="item-tags">
                <h3>상품 태그</h3>
                <div>
                  <span className="skeleton tag"></span>
                  <span className="skeleton tag"></span>
                  <span className="skeleton tag"></span>
                </div>
              </div>
            </div>
            <div className="user-info">
              <div className="user-image">
                <div
                  className="skeleton"
                  style={{ width: 50, height: 50, borderRadius: "50%" }}
                ></div>
              </div>
              <div className="user-text">
                <div className="skeleton text" style={{ width: "20%" }}></div>
                <div className="skeleton text" style={{ width: "30%" }}></div>
              </div>
              <div className="favorite-section">
                <button>
                  <img src={heart} alt="좋아요 아이콘" />
                </button>
                <div className="skeleton text" style={{ width: "20px" }}></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="product-info">
          <div className="image-section">
            <img
              src={item.images[0] ?? fallback}
              onError={(e) => {
                e.target.src = fallback;
              }}
              alt="상품이미지"
            />
          </div>
          <div className="text-section">
            <div className="item-info">
              <div className="item-header">
                <div className="item-name">{item.name}</div>
                <div className="item-price">
                  {item.price.toLocaleString()}원
                </div>
              </div>
              <div className="item-description">
                <h3>상품 소개</h3>
                <p>{item.description}</p>
              </div>
              <div className="item-tags">
                <h3>상품 태그</h3>
                <ul className="tag-list">
                  {item.tags.map((tag, index) => (
                    <li key={index} className="tag">
                      #{tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="user-info">
              <div className="user-image">
                <img src={item.image ?? profile} alt="프로필 이미지" />
              </div>
              <div className="user-text">
                <div className="user-name">{item.ownerNickname}</div>
                <div className="date">
                  {item.createdAt.split("T")[0].replaceAll("-", ". ")}
                </div>
              </div>
              <div className="favorite-section">
                <button>
                  <img src={heart} alt="좋아요 아이콘" />
                </button>
                {item.favoriteCount}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
