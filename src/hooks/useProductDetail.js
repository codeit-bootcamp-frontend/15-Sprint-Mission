import { useState, useEffect } from 'react';
import { productAPI } from '../api/productAPI';

export const useProductDetail = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const response = await productAPI.getProductById(productId);
        setProduct(response);
        setError(null);
      } catch (error) {
        setError('상품 정보를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductDetail();
    }
  }, [productId]);

  return { product, loading, error };
};
