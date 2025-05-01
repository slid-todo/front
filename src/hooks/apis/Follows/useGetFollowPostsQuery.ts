import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { API } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { GetFollowsResponse } from '@/types/Follows';
import { BaseInfiniteQueryResponse } from '@/types/response';

export const getFollowPostsOptions = (): UseInfiniteQueryOptions<
  GetFollowsResponse,
  AxiosError,
  BaseInfiniteQueryResponse<GetFollowsResponse[]>
> => ({
  queryKey: [QUERY_KEYS.FOLLOWS],
  queryFn: ({ pageParam = 0 }) =>
    API.get<GetFollowsResponse>(
      `${API_ENDPOINTS.FOLLOW.GET}?lastCompleteId=${pageParam}&size=6`,
    ),
  getNextPageParam: (lastPage) => {
    const nextCursor = lastPage.data.nextCursor;
    return nextCursor !== 0 ? nextCursor : undefined;
  },
  initialPageParam: 0,
});

export const useGetFollowPosts = () => {
  const { data, ...etc } = useInfiniteQuery(getFollowPostsOptions());

  const follows = data?.pages.flatMap((page) => page.data.content) ?? [];

  return { follows, ...etc };
};
