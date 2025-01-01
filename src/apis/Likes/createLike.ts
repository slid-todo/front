import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';
import { CreateLikeResponse } from '@/types/Likes';

export const createLike = async (
  completeId: number,
): Promise<CreateLikeResponse> => {
  try {
    const response = await axiosInstance.post<CreateLikeResponse>(
      API_ENDPOINTS.LIKE.CREATE(completeId),
    );
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};
