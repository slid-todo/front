import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BaseResponse } from '@/types/response';

import { BasePageableTypes } from '@/types/pageable';
import { GoalsResponse } from '../Dashboard/useTodosOfGoalsQuery';

interface GoalsDetailResponse extends BaseResponse {
  data: BasePageableTypes<GoalsResponse[]>;
}

interface InfiniteQueryResponse {
  pageParams: number[];
  pages: GoalsDetailResponse[];
}

const GoalsDetailResponse = (): UseInfiniteQueryOptions<
  GoalsDetailResponse,
  AxiosError,
  InfiniteQueryResponse
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
  const { data, ...etc } = useInfiniteQuery(GoalsDetailResponse());
  const goals = data?.pages.flatMap((page) => page.data.content) ?? [];

  return { goals, ...etc };
};
