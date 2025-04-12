import axios from "./axios";

export const getItems = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) => {
  const response = await axios.get(
    `/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
  );
  const data = response.data;
  return data;
};
