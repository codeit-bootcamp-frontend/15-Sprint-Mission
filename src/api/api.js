import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export async function getData({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${
    keyword ? `&keyword=${keyword}` : ""
  }`;
  const res = await axios.get(
    `${API}products?${query}`
  );

  return res.data;
}
