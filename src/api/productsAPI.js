import baseAPI from "./axios";

export const productsAPI = {
  getProducts: async (page = 1, pageSize = 10, orderBy = "recent") => {
    try {
      const response = await baseAPI.get(`/products`, {
        params: { page, pageSize, orderBy },
      });
      return response.data;
    } catch (error) {
      console.error("상품 불러오기 실패", error);
      throw new Error("상품을 불러오는 데 실패했습니다.");
    }
  },
};
