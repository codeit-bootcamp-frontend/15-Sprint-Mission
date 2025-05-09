const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) => {
  try {
    const query = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
      orderBy,
      keyword,
    });

    const res = await fetch(
      `https://panda-market-api.vercel.app/products?${query.toString()}`
    );

    if (!res.ok) {
      throw new Error("상품을 불러오는 데 실패했습니다.");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getProducts;
