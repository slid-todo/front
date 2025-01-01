import { AxiosError } from 'axios';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { SearchRequest } from '@/hooks/apis/Search/useSearchQuery';
import axiosInstance from '@/lib/axiosInstance';

export const getSearch = async (request: SearchRequest) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.SEARCH, {
      params: request,
    });
    return response.data;
  } catch (error) {
    let errorMessage = 'An unknown error occurred.';
    if (error instanceof AxiosError) {
      if (error.response) {
        errorMessage =
          error.response.data?.message || 'An unknown error occurred.';
      }
    }
    throw new Error(errorMessage);
  }
};
