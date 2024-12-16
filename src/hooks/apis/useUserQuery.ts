import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import axiosInstance from '@/lib/axiosInstance';
import { BaseResponse } from '@/types/response';

interface UserResponse {
  email: string;
  name: string;
}

interface UserInfoResponse extends BaseResponse {
  data: UserResponse;
}

const getUserInfo = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.AUTH.USER);
  return response.data;
};

const userInfoOptions: UseQueryOptions<UserInfoResponse, AxiosError> = {
  queryKey: [QUERY_KEYS.USER_INFO],
  queryFn: getUserInfo,
};

export const useUserQuery = () => {
  const { data, isLoading, isError, error } = useQuery(userInfoOptions);
  const email = data?.data.email ?? '';
  const name = data?.data.name ?? '';

  return { email, name, isLoading, isError, error };
};
