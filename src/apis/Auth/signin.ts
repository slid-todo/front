import axiosInstance from '@/lib/axiosInstance';

import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { useTokenStore } from '@/store/useTokenStore';
import type { AuthDataRequest } from '@/types/Auth/AuthDataRequest';

export const signin = async (data: AuthDataRequest) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.SIGN_IN, data);

    useTokenStore.getState().setToken(response.headers.token || '');

    return response;
  } catch (error) {
    console.error('Error signin:', error);
    throw error;
  }
};
