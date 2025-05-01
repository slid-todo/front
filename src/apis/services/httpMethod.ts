import { AxiosError } from 'axios';

import axiosInstance, { setAuthToken } from '@/lib/axiosInstance';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptionsProps {
  method: HttpMethod;
  url: string;
  data?: unknown;
  token?: string;
}

async function request<T>({
  method,
  url,
  data,
  token,
}: RequestOptionsProps): Promise<T> {
  try {
    if (token) {
      setAuthToken(token);
    }

    const response = await axiosInstance.request<T>({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    if (!(error instanceof AxiosError)) {
      throw new Error('오류가 발생했습니다.');
    }

    const status = error.response?.status;
    const message = error.response?.data.message || error.message;

    throw new Error(JSON.stringify({ status, message }));
  }
}

export const API = {
  get: <T>(url: string, token?: string) =>
    request<T>({ method: 'GET', url, token }),
  post: <T, U>(url: string, data?: U) =>
    request<T>({ method: 'POST', url, data }),
  put: <T, U>(url: string, data: U) => request<T>({ method: 'PUT', url, data }),
  delete: <T>(url: string) => request<T>({ method: 'DELETE', url }),
};
