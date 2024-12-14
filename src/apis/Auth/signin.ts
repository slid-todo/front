import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';
import { AuthDataRequest } from '@/types/Auth/AuthDataRequest';

export const signin = async (data: AuthDataRequest) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.SIGN_IN, data);
    return response;
  } catch (error) {
    console.error('Error signin:', error);
    throw error;
  }
};
