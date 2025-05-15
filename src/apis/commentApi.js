import { instance } from "./instance";

export const getComments = async ({
  productId,
  limit = "3",
  cursor = null,
} = {}) => {
  if (!productId) {
    throw new Error("productId가 필요합니다.");
  }
  try {
    const params = { limit, cursor };
    const { data } = await instance.get(`products/${productId}/comments`, {
      params,
    });
    return data;
  } catch (error) {
    throw new Error(`데이터 불러오기 실패: ${error.message}`);
  }
};
