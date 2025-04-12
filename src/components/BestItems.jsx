import React, { useEffect, useState } from "react";
import axios from "axios";

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
        console.error("Error fetching best items:", error);
      }
    };
    fetchBestItems();
  }, []);

  return (
    <div>
      <div>
        <h2>베스트 상품</h2>
        <ul>
          {bestItems.map((item) => (
            <li key={item.id}>
              <a href="#">
                <img
                  src={
                    item.images && item.images.length > 0
                      ? item.images[0]
                      : "/img/emptyMarket.png"
                  }
                  alt={item.name}
                />
              </a>
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>♡ {item.favoriteCount}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BestItems;
