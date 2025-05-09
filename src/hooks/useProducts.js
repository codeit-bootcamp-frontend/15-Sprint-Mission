import { useState, useEffect } from "react";
import { productsAPI } from "@/api/productsAPI";

const useProducts = (page = 1, pageSize = 10, orderBy = "recent") => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await productsAPI.getProducts(page, pageSize, orderBy);
        const itemsData = response.list || [];
        setItems(itemsData);
        setLoading(false);
      } catch (err) {
        console.error("상품 데이터 로딩 실패:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchItems();
  }, [page, pageSize, orderBy]);

  return { items, loading, error };
};

export default useProducts;
