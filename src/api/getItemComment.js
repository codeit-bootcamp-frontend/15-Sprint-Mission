export default function getItemComment({ id, limit = 10 }) {
  return fetch(
    `https://panda-market-api.vercel.app/products/${id}/comments?limit=${limit}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching comments:", error);
      throw error;
    });
}
