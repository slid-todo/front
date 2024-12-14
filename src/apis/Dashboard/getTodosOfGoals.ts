import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '../../../lib/axiosInstance';

export const getTodosOfGoals = async () => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.TODOS.GET_GOALS);

    return response.data;
  } catch (error) {
    console.error('목표 별 할일 조회 에러', error);
    throw error;
  }
};
