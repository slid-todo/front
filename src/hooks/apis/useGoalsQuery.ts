import {
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { API } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { GoalsResponse } from '@/types/Goals';

export const goalsOptions = (
  token?: string,
): UseSuspenseQueryOptions<GoalsResponse, AxiosError> => ({
  queryKey: [QUERY_KEYS.GOALS],
  queryFn: () => API.get<GoalsResponse>(API_ENDPOINTS.GOAL.GOALS, token),
});

export const useGoalsQuery = () => {
  const { data, ...etc } = useSuspenseQuery(goalsOptions());
  const goals = data?.data ?? [];

  return { goals, ...etc };
};
