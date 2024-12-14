import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';

export const getTodayTodos = async () => {
  try {
    const response = await axiosInstance.get(
      API_ENDPOINTS.TODOS.GET_TODAY_TODOS,
    );

    return response.data;
  } catch (error) {
    console.error('오늘 할일 불러오기 에러', error);
    throw error;
  }
};
