import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  withCredentials: true,
});

// 응답 인터셉터 (서버에서 오는 응답 처리)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);
    // 오류가 발생한 경우, 응답이 401일 때 로그인 페이지로 리디렉션
    if (error.response && error.response.status === 401) {
      console.log('401');
      window.location.href = '/signin';
    }
    return Promise.reject(error); // 에러는 그대로 반환
  },
);

export default axiosInstance;
