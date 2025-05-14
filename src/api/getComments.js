export async function getComments({ id, limit = 8 }) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${id}/comments?limit=${limit}`
  );
  const body = await response.json();
  return body;
}
