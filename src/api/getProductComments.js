const getProductComments = async (productId, limit = 10, cursor = null) => {
  try {
    const params = new URLSearchParams();
    params.append("limit", limit);
    if (cursor !== null) {
      params.append("cursor", cursor);
    }

    const res = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}/comments?${params.toString()}`
    );

    if (!res.ok) {
      throw new Error("댓글 정보를 불러오지 못했습니다.");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getProductComments;
