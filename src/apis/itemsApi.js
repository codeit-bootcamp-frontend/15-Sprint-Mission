import { instance } from "@apis/instance";

const getItems = async (
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = ""
) => {
  try {
    const { data } = await instance.get("/products", {
      params: { page, pageSize, orderBy, keyword },
    });
    return data;
  } catch (error) {
    throw new Error(`상품 목록 불러오기 실패: ${error.message}`);
  }
};

export { getItems };
