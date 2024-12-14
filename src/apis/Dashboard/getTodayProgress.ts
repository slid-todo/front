import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';

export const getTodayProgress = async () => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.TODOS.GET_PROGRESS);

    return response.data;
  } catch (error) {
    console.error('오늘 진행 상황 불러오기 에러', error);
    throw error;
  }
};
