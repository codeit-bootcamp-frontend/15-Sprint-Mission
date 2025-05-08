import { api } from "./api";
export default async function getItems(offset = "", limit = "", sort = "") {
  const res = await api.get(
    `/products?page=${offset}&pageSize=${limit}&orderBy=${sort}`
  );
  return res.data;
}
