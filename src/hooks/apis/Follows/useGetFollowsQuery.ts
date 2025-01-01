// hooks/useGetFollows.ts
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GetFollowsResponse } from '@/types/Follows';
import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';

export const getFollowsOptions = (): UseQueryOptions<
  GetFollowsResponse,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.FOLLOWS],
  queryFn: () => GET<GetFollowsResponse>(API_ENDPOINTS.FOLLOW.GET),
});

export const useGetFollows = () => {
  const { data, ...etc } = useQuery(getFollowsOptions());

  const follows = data?.data.content;

  return { follows, ...etc };
};
