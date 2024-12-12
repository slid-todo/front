import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';

export const getSidebarGoals = async () => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.GOAL.GOALS);

    return response.data;
  } catch (error) {
    console.error('사이드바 목표 불러오기 에러', error);
    throw error;
  }
};
