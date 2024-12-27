import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BaseResponse } from '@/types/response';

import { GoalsResponse } from '../Dashboard/useTodosOfGoalsQuery';

interface GoalsDetailResponse extends BaseResponse {
  data: {
    content: GoalsResponse[];
  };
}

const GoalsDetailResponse = (): UseQueryOptions<
  GoalsDetailResponse,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.ALL_GOALS],
  queryFn: () =>
    GET<GoalsDetailResponse>(
      `${API_ENDPOINTS.GOAL.ALL_GOALS}?lastGoalId=0&size=5`,
    ),
});

export const useGoalsDetailQuery = () => {
  const { data, ...etc } = useQuery(GoalsDetailResponse());
  const goals = data?.data.content ?? [];

  return { goals, ...etc };
};
