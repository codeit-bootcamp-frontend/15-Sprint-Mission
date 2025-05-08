// src/api/axios.js

import axios from 'axios';

export const baseAPI = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});
