import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { UserProfileResponse } from '@/types/response';

const userProfileOptions = (
  userId: number,
): UseQueryOptions<UserProfileResponse, AxiosError> => ({
  queryKey: [QUERY_KEYS.USER_PROFILE, userId],
  queryFn: () =>
    GET<UserProfileResponse>(API_ENDPOINTS.AUTH.USER_PROFILE(userId)),
});

export const useUserProfileQuery = (userId: number) => {
  const { data, isLoading } = useQuery(userProfileOptions(userId));
  const name = data?.data.name;
  const profilePic = data?.data.profilePic;
  const isFollow = data?.data.isFollow;
  const completeResponses = data?.data.completeResponses ?? [];
  return { name, profilePic, isFollow, completeResponses, isLoading };
};
