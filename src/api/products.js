import axios from "./axios";

export const getProductList = async ({ limit = 8, offset = 0, sort }) => {
  const response = await axios.get(
    `products/?pageSize=${limit}&offset=${offset}&orderBy=${sort}`
  );
  return response;
};
