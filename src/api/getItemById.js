export default async function getProductById(id) {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${id}`
    );
    if (!response.ok) {
      throw new Error("상품 정보를 불러오는데 실패했습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("상품 상세 에러:", error);
    throw error;
  }
}
