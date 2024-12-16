import { AxiosError } from 'axios';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { getSidebarGoals } from '@/apis/Sidebar/getSidebarGoals';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { Goal } from '@/types/Goals';

interface GoalsResponse {
  data: Goal[];
  statusCode: number;
  timestamp: string;
}

const goalsOptions: UseQueryOptions<GoalsResponse, AxiosError> = {
  queryKey: [QUERY_KEYS.SIDEBAR_GOALS],
  queryFn: getSidebarGoals,
};

export const useGoalsQuery = () => {
  const { data, isLoading, isError, error } = useQuery(goalsOptions);
  const goals = data?.data ?? [];

  return { goals, isLoading, isError, error };
};
