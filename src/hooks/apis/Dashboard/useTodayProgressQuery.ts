import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { API } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { TodayProgressResponse } from '@/types/Dashboard';

export const todayProgressOptions = (
  token?: string,
): UseQueryOptions<TodayProgressResponse, AxiosError> => ({
  queryKey: [QUERY_KEYS.TODAY_PROGRESS],
  queryFn: () =>
    API.get<TodayProgressResponse>(
      API_ENDPOINTS.TODOS.GET_TODAY_PROGRESS,
      token,
    ),
});

export const useTodayProgressQuery = () => {
  const { data, ...etc } = useQuery(todayProgressOptions());
  const progress = data?.data.progress ?? 0;

  return { progress, ...etc };
};
