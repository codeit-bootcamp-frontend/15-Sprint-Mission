import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BestItems.css";

const BestItems = () => {
  const [bestItems, setBestItems] = useState([]);

  useEffect(() => {
    const fetchBestItems = async () => {
      try {
        const response = await axios.get(
          "https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=recent"
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
    <div className="bestItems-container">
      <h2 className="bestItems-title">베스트 상품</h2>
      <ul className="bestItems-list">
        {bestItems.map((item) => (
          <li key={item.id} className="bestItems-item">
            <a>
              <img
                className="bestItems-image"
                src={
                  item.images && item.images.length > 0
                    ? item.images[0]
                    : "/img/emptyMarket.png"
                }
                alt={item.name}
              />
            </a>
            <div className="bestItems-info">
              <h3 className="bestItemName">{item.name}</h3>
              <p className="bestItemPrice">{item.price}</p>
              <p className="bestItemFavoriteCount">♡ {item.favoriteCount}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestItems;
