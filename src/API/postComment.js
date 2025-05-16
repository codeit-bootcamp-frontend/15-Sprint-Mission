import { api } from "./api";
export default async function postComment(id, message) {
  const res = await api.post(`/products/${id}/comments`, { message });
  return res.data;
}

// {
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// }
