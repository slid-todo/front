import { AxiosError } from 'axios';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';
import { GetFollowsRequest, GetFollowsResponse } from '@/types/Follows';

export const getFollows = async (
  request: GetFollowsRequest,
): Promise<GetFollowsResponse> => {
  try {
    const response = await axiosInstance.get<GetFollowsResponse>(
      API_ENDPOINTS.FOLLOW.GET,
      {
        params: request,
      },
    );
    return response.data;
  } catch (error) {
    let errorMessage = 'An unknown error occurred.';
    if (error instanceof AxiosError && error.response) {
      errorMessage = error.response.data?.message || errorMessage;
    }
    throw new Error(errorMessage);
  }
};

// 만들었는데 나중에 보니 쓸모없어서 일단 나뒀어요 ㅠ.ㅠ
