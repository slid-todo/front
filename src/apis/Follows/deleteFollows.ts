import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';

export const deleteFollows = async (followerId: number) => {
  try {
    const response = await axiosInstance.delete(
      API_ENDPOINTS.FOLLOW.DELETE(followerId),
    );
    return response.data;
  } catch (error) {
    console.error('Error Delete todo: ', error);
    throw error;
  }
};

// 만들었는데 나중에 보니 쓸모없어서 일단 나뒀어요 ㅠ.ㅠ
