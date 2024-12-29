import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { GoalsResponse } from '@/types/response';

const goalsOptions: UseQueryOptions<GoalsResponse, AxiosError> = {
  queryKey: [QUERY_KEYS.GOALS],
  queryFn: () => GET<GoalsResponse>(API_ENDPOINTS.GOAL.GOALS),
};

export const useGoalsQuery = () => {
  const { data, ...etc } = useQuery(goalsOptions);
  const goals = data?.data ?? [];

  return { goals, ...etc };
};
