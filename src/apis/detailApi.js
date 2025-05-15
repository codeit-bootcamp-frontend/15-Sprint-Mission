import { instance } from "./instance";

export const getItemDetail = async (productId) => {
  try {
    const id = Number(productId);
    const { data } = await instance.get(`products/${id}`);
    return data;
  } catch (error) {
    throw new Error(`데이터 불러오기 실패: ${error.message}`);
  }
};
