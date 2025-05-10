import baseAPI from "./axios";

export const productIdAPI = {
  getProductId: async (productId) => {
    try {
      const response = await baseAPI.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error("상품 불러오기 실패", error);
      throw new Error("상품을 불러오는 데 실패했습니다.");
    }
  },
};
