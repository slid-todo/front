import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { API } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';

export interface FollowCount {
  followerCount: number;
  followeeCount: number;
}

export interface FollowCountResponse {
  data: FollowCount;
  statusCode: number;
  timestamp: string;
}

const followCountOptions: UseQueryOptions<FollowCountResponse, AxiosError> = {
  queryKey: [QUERY_KEYS.FOLLOW_COUNT],
  queryFn: () => API.get<FollowCountResponse>(API_ENDPOINTS.AUTH.FOLLOW_COUNT),
};

export const useFollowCountQuery = () => {
  const { data, isLoading, isError, error } = useQuery(followCountOptions);

  return { data, isLoading, isError, error };
};
