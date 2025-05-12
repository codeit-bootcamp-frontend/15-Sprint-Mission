import axios from "axios";

const API_HEADERS = {
  JSON: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  FORM_DATA: {
    "Content-Type": "multipart/form-data",
  },
};

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
  timeout: 5000,
  headers: API_HEADERS.JSON,
});

export { instance };
