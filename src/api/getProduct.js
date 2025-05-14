export async function getProduct({ id }) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${id}`
  );
  const body = await response.json();
  return body;
}
