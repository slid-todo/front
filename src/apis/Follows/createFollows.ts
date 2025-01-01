import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';
import { CreateFollowsResponse } from '@/types/Follows';

export const createFollows = async (
  followerId: number,
): Promise<CreateFollowsResponse> => {
  try {
    const response = await axiosInstance.post<CreateFollowsResponse>(
      API_ENDPOINTS.FOLLOW.CREATE(followerId),
    );
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};
