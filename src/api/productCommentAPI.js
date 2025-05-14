import { baseAPI } from './axios';

export const productCommentAPI = {
  // 상품 댓글 조회
  getProductComments: async (productId, limit, cursor) => {
    try {
      // cursor가 null이면 limit만 전달
      const queryParams = cursor 
        ? `limit=${limit}&cursor=${cursor}`
        : `limit=${limit}`;
        
      const response = await baseAPI.get(
        `/products/${productId}/comments?${queryParams}`
      );
      return response.data;
    } catch (error) {
      throw new Error('댓글을 불러오는데 실패했습니다.');
    }
  },

};
