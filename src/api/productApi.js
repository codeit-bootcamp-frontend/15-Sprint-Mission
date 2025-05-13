export const getProducts = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
  const data = await response.json();
  return data;
};
