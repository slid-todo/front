import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';
import { ModifyProfilePicRequest } from '@/types/Auth/ModifyProfilePicRequest';

export const modifyProfilePic = async (data: ModifyProfilePicRequest) => {
  try {
    const response = await axiosInstance.put(
      API_ENDPOINTS.AUTH.PROFILE_PIC,
      data,
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
