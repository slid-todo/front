import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

export const setAuthToken = (token: string) => {
  if (token) {
    axiosInstance.defaults.headers['token'] = token;
  }
};

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const getCookie = (name: string) => {
        const matches = document.cookie.match(
          new RegExp(`(^|; )${name}=([^;]*)`),
        );
        return matches ? decodeURIComponent(matches[2]) : null;
      };

      const token = getCookie('token');
      if (token) {
        config.headers['token'] = token;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
