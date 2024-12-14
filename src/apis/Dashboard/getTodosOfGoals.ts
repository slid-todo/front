import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';

export const getTodosOfGoals = async () => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINTS.TODOS.GET_GOALS}?lastTodoId=0&size=3`,
    );

    return response.data;
  } catch (error) {
    console.error('목표 별 할일 조회 에러', error);
    throw error;
  }
};
