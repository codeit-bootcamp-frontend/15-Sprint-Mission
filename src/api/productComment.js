import baseAPI from "./axios";

export const productCommentAPI = {
  getProductComment: async (productId, limit = 3, cursor = null) => {
    try {
      const response = await baseAPI.get(`/products/${productId}/comments`, {
        params: { limit, cursor },
      });
      return response.data;
    } catch (error) {
      console.error("상품 댓글 불러오기 실패", error);
      throw new Error("상품 댓글을 불러오는 데 실패했습니다.");
    }
  },
};
