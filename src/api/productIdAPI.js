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
  // 추후 로그인 회원가입 기능으로 토큰 얻고 기능추가
  // postProductIdFavorite: async (productId) => {
  //   try {
  //     const response = await baseAPI.post(`/products/${productId}/favorite`);
  //     return response.data;
  //   } catch (error) {
  //     console.error("상품 좋아요 실패", error);
  //     throw new Error("상품 좋아요를 실패했습니다.");
  //   }
  // },
  // deleteProductIdFavorite: async (productId) => {
  //   try {
  //     const response = await baseAPI.delete(`/products/${productId}/favorite`);
  //     return response.data;
  //   } catch (error) {
  //     console.error("상품 좋아요 취소 실패", error);
  //     throw new Error("상품 좋아요 취소를 실패했습니다.");
  //   }
  // },
};
