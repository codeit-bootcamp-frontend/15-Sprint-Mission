import { instance } from "./instance";

export const getItems = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) => {
  try {
    const params = {
      page,
      pageSize,
      orderBy,
      ...(keyword && { keyword }), // keyword가 빈 문자열이 아닌 경우에만 포함
    };
    const { data } = await instance.get("products", { params });
    return data;
  } catch (error) {
    throw new Error(`데이터 불러오기 실패: ${error.message}`);
  }
};
