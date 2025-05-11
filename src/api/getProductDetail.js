const getProductDetail = async (productId) => {
  try {
    const res = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}`
    );

    if (!res.ok) {
      throw new Error("상품 상세 정보를 불러오지 못했습니다.");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getProductDetail;
