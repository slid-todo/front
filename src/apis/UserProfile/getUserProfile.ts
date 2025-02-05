import axios from 'axios';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getUserProfile = async (userId: number, token: string) => {
  try {
    const response = await axios.get(
      apiUrl + API_ENDPOINTS.AUTH.USER_PROFILE(userId),
      {
        headers: {
          token: token,
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('❌ API 요청 실패:', error);
    throw new Error('사용자 프로필을 가져오는 중 문제가 발생했습니다.');
  }
};
