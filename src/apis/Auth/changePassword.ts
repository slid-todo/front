import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';
import { ChangePasswordRequest } from '@/types/Auth/ChangePasswordRequest';

export const changePassword = async (data: ChangePasswordRequest) => {
  try {
    const response = await axiosInstance.put(API_ENDPOINTS.AUTH.PASSWORD, data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
