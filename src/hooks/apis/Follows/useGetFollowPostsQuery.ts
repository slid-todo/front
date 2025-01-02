// hooks/useGetFollows.ts
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GetFollowsResponse } from '@/types/Follows';
import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';

export const getFollowPostsOptions = (): UseQueryOptions<
  GetFollowsResponse,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.FOLLOWS],
  queryFn: ({ pageParam = 0 }) =>
    GET<GetFollowsResponse>(
      `${API_ENDPOINTS.FOLLOW.GET}?lastCompleteId=${pageParam}&size=10`,
    ),
});

export const useGetFollowPosts = () => {
  const { data, ...etc } = useQuery(getFollowPostsOptions());

  const follows = data?.data.content ?? [];

  return { follows, ...etc };
};
