import axios from 'axios';
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
    const getCookie = (name: string) => {
      const matches = document.cookie.match(
        new RegExp(`(^|; )${name}=([^;]*)`),
      );
      return matches ? decodeURIComponent(matches[2]) : null;
    };

    const token = getCookie('token'); // 'token' 쿠키 값을 가져옴

    if (token) {
      config.headers['token'] = token; // 헤더에 추가
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default axiosInstance;
