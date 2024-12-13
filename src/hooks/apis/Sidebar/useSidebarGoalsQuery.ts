import { AxiosError } from 'axios';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { getSidebarGoals } from '@/apis/Sidebar/getSidebarGoals';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { Goal } from '@/types/Goals';

interface SidebarGoalsResponse {
  data: Goal[];
  statusCode: number;
  timestamp: string;
}

const sidebarGoalsOptions: UseQueryOptions<SidebarGoalsResponse, AxiosError> = {
  queryKey: [QUERY_KEYS.SIDEBAR_GOALS],
  queryFn: getSidebarGoals,
};

export const useSidebarGoalsQuery = () => {
  const { data, isLoading, isError, error } = useQuery(sidebarGoalsOptions);
  const goals = data?.data ?? [];

  return { goals, isLoading, isError, error };
};
