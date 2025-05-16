import { api } from "./api";
export default async function getComments(productIdNum, limit, cursor) {
  const res = await api.get(
    `/products/${productIdNum}/comments?limit=${limit}&cursor=${cursor}`
  );
  return res.data;
}
