import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const token = process.env.NEXT_PUBLIC_TEST_TOKEN;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    token: token, // 여기서 기본 헤더를 설정
  },
});

// // 요청 인터셉터를 사용하여 토큰을 동적으로 헤더에 추가합니다.
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // 로컬 스토리지에서 토큰을 가져옵니다.
//     const token = localStorage.getItem('token'); // 또는 쿠키에서 가져올 수도 있음

//     // 토큰이 있을 경우 Authorization 헤더에 추가
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export default axiosInstance;
