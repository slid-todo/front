import axios from 'axios';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { AuthDataRequest } from '@/types/Auth/AuthDataRequest';

export const signin = async (data: AuthDataRequest) => {
  const baseurl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.post(
      baseurl + API_ENDPOINTS.AUTH.SIGN_IN,
      data,
    );
    return response.data;
  } catch (error) {
    console.error('Error signin:', error);
    throw error;
  }
};
