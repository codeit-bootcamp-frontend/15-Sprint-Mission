import { useState, useEffect } from "react";
import { productsAPI } from "@/api/productsAPI";

/**
 * 상품 목록을 가져오는 커스텀 훅
 * @param {number} page - 현재 페이지 번호 (기본값: 1)
 * @param {number} pageSize - 한 페이지당 아이템 수 (기본값: 10)
 * @param {string} orderBy - 정렬 기준 (기본값: "recent")
 * @param {string} keyword - 검색어 (기본값: "")
 */

const useProducts = (
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = ""
) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0); // 전체 아이템 수

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const response = await productsAPI.getProducts(
          page,
          pageSize,
          orderBy,
          keyword
        );
        const itemsData = response.list || [];
        const total = response.totalCount || 0; // 서버에서 totalCount도 내려줘야 함
        setItems(itemsData);
        setTotalCount(total);
        setError(null);
      } catch (err) {
        console.error("상품 데이터 로딩 실패:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [page, pageSize, orderBy, keyword]);

  return { items, totalCount, loading, error };
};

export default useProducts;
