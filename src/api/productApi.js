// 전체를 가져오며, params를 사용하여 특정 조건에 맞는 제품을 가져올 수 있ㄷ ㅏ.
export const getProducts = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
  const data = await response.json();
  return data;
};

// 특정 상품에 대한 정보를 가져올 수 있다.
export const getProductById = async (productId) => {
  const response = await fetch(`https://panda-market-api.vercel.app/products/${productId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await response.json();
  return data;
};

// 댓글 리스트 가져오는 함수 :: 필수값: id/limit
export const getComments = async (productId, limit) => {
  const response = await fetch(`https://panda-market-api.vercel.app/products/${productId}/comments?limit=${limit}`);

  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }

  const data = await response.json();
  return data;
};
