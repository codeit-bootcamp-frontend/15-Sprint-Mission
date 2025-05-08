import { useState, useCallback, useEffect } from 'react';
import { productAPI } from '../api/productAPI';

export const useBestProducts = (bestPageSize) => {
  const [bestProducts, setBestProducts] = useState([]);

  const fetchBestProducts = useCallback(async () => {
    try {
      const response = await productAPI.getProducts(1, bestPageSize, 'favorite');
      setBestProducts(response.list);
    } catch (error) {
      alert('베스트 상품을 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  }, [bestPageSize]);

  useEffect(() => {
    fetchBestProducts();
  }, [fetchBestProducts]);

  return { bestProducts };
};
