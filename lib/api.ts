import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export type ResponseItem = {
  isCompleted: boolean;
  imageUrl: string | null;
  memo: string | null;
  name: string;
  tenantId: string;
  id: number;
};

export type SimpleItem = Pick<ResponseItem, "id" | "name" | "isCompleted">;

export type ResponseSimpleItems = SimpleItem[];

export type ResponseDelete = {
  message: string;
};

export type PostItem = {
  name: string;
};

export type PatchItem = {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
};

export async function getItems() {
  const response = await api.get<ResponseSimpleItems>("/items");
  return response.data;
}

export async function getItem(itemId: number) {
  const response = await api.get<ResponseItem>("/items/" + itemId);
  return response.data;
}

export async function postItem(body: PostItem) {
  const response = await api.post<ResponseItem>("/items", body);
  return response.data;
}

export async function patchItem(itemId: number, body: PatchItem) {
  const response = await api.patch<ResponseItem>("/items/" + itemId, body);
  return response.data;
}

export async function deleteItem(itemId: number) {
  const response = await api.delete<ResponseDelete>("/items/" + itemId);
  return response.data;
}

export async function postImage(file: File) {
  const data = new FormData();
  data.append("image", file);
  const response = await api.post<{ url: string }>("/images/upload", data);
  return response.data;
}
