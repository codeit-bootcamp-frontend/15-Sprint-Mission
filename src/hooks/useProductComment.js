import { useState, useEffect } from 'react';
import { productCommentAPI } from '../api/productCommentAPI';

export const useProductComment = (productId, limit = 10, cursor = null) => {
  const [productComments, setProductComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductComments = async () => {
      try {
        setLoading(true);
        // productId 유효성 검사
        if (!productId || typeof productId !== 'string') {
          throw new Error('유효하지 않은 상품 ID입니다.');
        }
        const response = await productCommentAPI.getProductComments(productId, limit, cursor);
        setProductComments(response);
        setError(null);
      } catch (error) {
        console.error('댓글 조회 실패:', error);
        setError(error.message || '댓글을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductComments();
    }
  }, [productId, limit, cursor]);

  return { productComments, loading, error };
};
