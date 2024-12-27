import { AxiosError } from 'axios';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { Goal } from '@/types/Goals';

export interface GoalsResponse {
  data: Goal[];
  statusCode: number;
  timestamp: string;
}

const goalsOptions: UseQueryOptions<GoalsResponse, AxiosError> = {
  queryKey: [QUERY_KEYS.GOALS],
  queryFn: () => GET<GoalsResponse>(API_ENDPOINTS.GOAL.GOALS),
};

export const useGoalsQuery = () => {
  const { data, ...etc } = useQuery(goalsOptions);
  const goals = data?.data ?? [];

  return { goals, ...etc };
};
