export async function getProducts(params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    );

    if (!response.ok) {
      throw new Error("데이터를 불러오는데 실패했습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}
