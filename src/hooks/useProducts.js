import { useState, useEffect } from "react";
import { productsAPI } from "@/api/productsAPI";

const useProducts = (page = 1, pageSize = 10, orderBy = "recent") => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true); // 데이터 로딩 시작 시 로딩 상태 설정
        const response = await productsAPI.getProducts(page, pageSize, orderBy);
        const itemsData = response.list || [];
        setItems(itemsData);
        setError(null); // 성공 시 에러 초기화
      } catch (err) {
        console.error("상품 데이터 로딩 실패:", err);
        setError(err.message);
      } finally {
        setLoading(false); // 성공이든 실패든 로딩 상태 종료
      }
    };

    fetchItems();
  }, [page, pageSize, orderBy]); // orderBy가 변경될 때마다 데이터를 다시 가져옴

  return { items, loading, error };
};

export default useProducts;
