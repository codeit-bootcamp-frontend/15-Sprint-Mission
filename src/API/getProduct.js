import { api } from "./api";
export default async function getProduct(id) {
  const res = await api.get(`/products/${id}`);
  return res.data;
}
