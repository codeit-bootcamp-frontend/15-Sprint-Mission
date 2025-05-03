import axios from "./axios";

export const getProductList = async ({ limit = 10, page = 1, sort }) => {
  const response = await axios.get(
    `products/?pageSize=${limit}&page=${page}&orderBy=${sort}`
  );
  return response;
};
