import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';
import { AuthDataRequest } from '@/types/Auth/AuthDataRequest';

export const signup = async (data: AuthDataRequest) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.SIGN_UP, data);
    return response;
  } catch (error) {
    console.error('Error signin:', error);
    throw error;
  }
};
