import axios from "./axios";

export const getProductList = async ({ limit = 8, offset = 0 }) => {
  const response = await axios.get(
    `products/?pageSize=${limit}&offset=${offset}`
  );
  return response;
};
