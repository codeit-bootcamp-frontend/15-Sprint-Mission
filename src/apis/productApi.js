import { instance } from "@apis/instance";

const getProduct = async (productId) => {
  try {
    const { data } = await instance.get(`/products/${productId}`);
    return data;
  } catch (error) {
    throw new Error(`상품 상세 조회 불러오기 실패: ${error.message}`);
  }
};

const getProductComments = async (productId, limit = 10, cursor = null) => {
  try {
    let url = `/products/${productId}/comments?limit=${limit}`;
    if (cursor) {
      url += `&cursor=${cursor}`;
    }

    const { data } = await instance.get(url);
    return data;
  } catch (error) {
    throw new Error(`상품의 댓글 정보 불러오기 실패: ${error.message}`);
  }
};

export { getProduct, getProductComments };
