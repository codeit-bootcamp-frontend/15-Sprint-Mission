import baseAPI from "./axios";

export const productsAPI = {
  getProducts: async (
    page = 1,
    pageSize = 10,
    orderBy = "recent",
    keyword = ""
  ) => {
    try {
      const response = await baseAPI.get(`/products`, {
        params: { page, pageSize, orderBy, keyword },
      });
      return response.data;
    } catch (error) {
      console.error("전체 상품 불러오기 실패", error);
      throw new Error("전체 상품들을 불러오는 데 실패했습니다.");
    }
  },
};
