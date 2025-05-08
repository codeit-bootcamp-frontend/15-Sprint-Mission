import { api } from "./api";
export default async function getItems(page = "", pageSize = "", sort = "") {
  const res = await api.get(
    `/products?page=${page}&pageSize=${pageSize}&orderBy=${sort}`
  );
  return res.data;
}
