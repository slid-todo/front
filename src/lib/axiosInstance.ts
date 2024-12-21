import axios from 'axios';

import { useTokenStore } from '@/store/useTokenStore';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = useTokenStore.getState().token;

    if (token) {
      config.headers['token'] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default axiosInstance;
