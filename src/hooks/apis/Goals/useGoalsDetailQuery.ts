import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { GoalsDetailResponse } from '@/types/Goals';
import { BaseInfiniteQueryResponse } from '@/types/response';

const GoalsDetailOptions = (): UseInfiniteQueryOptions<
  GoalsDetailResponse,
  AxiosError,
  BaseInfiniteQueryResponse<GoalsDetailResponse[]>
> => ({
  queryKey: [QUERY_KEYS.ALL_GOALS],
  queryFn: ({ pageParam = 0 }) =>
    GET<GoalsDetailResponse>(
      `${API_ENDPOINTS.GOAL.ALL_GOALS}?lastGoalId=${pageParam}&size=5`,
    ),
  getNextPageParam: (lastPage) => {
    const nextCursor = lastPage.data.nextCursor;
    return nextCursor !== 0 ? nextCursor : undefined;
  },
  initialPageParam: 0,
});

export const useGoalsDetailQuery = () => {
  const { data, ...etc } = useInfiniteQuery(GoalsDetailOptions());
  const goals = data?.pages.flatMap((page) => page.data.content) ?? [];

  return { goals, ...etc };
};
