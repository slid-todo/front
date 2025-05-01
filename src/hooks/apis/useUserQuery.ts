import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BaseResponse } from '@/types/response';

interface UserResponse {
  email: string;
  name: string;
  profilePic: string;
}

interface UserInfoResponse extends BaseResponse {
  data: UserResponse;
}

const userInfoOptions: UseQueryOptions<UserInfoResponse, AxiosError> = {
  queryKey: [QUERY_KEYS.USER_INFO],
  queryFn: () => GET<UserInfoResponse>(API_ENDPOINTS.AUTH.USER),
};

export const useUserQuery = () => {
  const { data, ...etc } = useQuery(userInfoOptions);
  const email = data?.data.email ?? '';
  const name = data?.data.name ?? '';
  const profile = data?.data.profilePic ?? '';

  return { email, name, profile, ...etc };
};
