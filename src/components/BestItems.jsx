import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css"; // 통합 CSS로 변경

const BestItems = () => {
  const [bestItems, setBestItems] = useState([]);

  useEffect(() => {
    const fetchBestItems = async () => {
      try {
        const response = await axios.get(
          "https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite"
        );
        setBestItems(response.data?.list || []);
        console.log("받은 응답:", response.data);
      } catch (error) {
        console.error("Error fetching besttems:", error);
      }
    };
    fetchBestItems();
  }, []);

  return (
    <div className="container best-items-container">
      <div className="header best-items-header">
        <h2 className="title best-items-title">베스트 상품</h2>
        <ul className="list best-items-list">
          {bestItems.map((item) => (
            <li key={item.id} className="best-items-item">
              <a>
                <img
                  className="image best-items-image"
                  src={
                    item.images && item.images.length > 0
                      ? item.images[0]
                      : "/img/emptyMarket.png"
                  }
                  alt={item.name}
                />
              </a>
              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">{item.price}</p>
                <p className="item-favorite-count">♡ {item.favoriteCount}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BestItems;
