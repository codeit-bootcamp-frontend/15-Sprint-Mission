import { safeFetch } from '@/utils/api';

export const requestGet = async (url, options = {}) => {
  return safeFetch({ url, options: { method: 'GET', ...options } });
};

export const requestPost = async (url, data, options = {}) => {
  const isFormData = data instanceof FormData;

  return safeFetch({
    url,
    options: {
      method: 'POST',
      headers: isFormData ? undefined : { 'Content-Type': 'application/json' },
      body: isFormData ? data : JSON.stringify(data),
      ...options,
    },
  });
};

export const requestPut = async (url, data, options = {}) => {
  return safeFetch({
    url,
    options: {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      ...options,
    },
  });
};

export const requestPatch = async (url, data, options = {}) => {
  return safeFetch({
    url,
    options: {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      ...options,
    },
  });
};

export const requestDelete = async (url, options = {}) => {
  return safeFetch({ url, options: { method: 'DELETE', ...options } });
};
