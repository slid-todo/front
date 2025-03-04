import {
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { getQueryClient } from '@/lib/query/getQueryClient';
import { TodayProgressResponse } from '@/types/Dashboard';

export const todayProgressOptions = (
  token?: string,
): UseSuspenseQueryOptions<TodayProgressResponse, AxiosError> => ({
  queryKey: [QUERY_KEYS.TODAY_PROGRESS],
  queryFn: () =>
    GET<TodayProgressResponse>(API_ENDPOINTS.TODOS.GET_TODAY_PROGRESS, token),
  initialData: () =>
    getQueryClient().getQueryData([QUERY_KEYS.TODAY_PROGRESS]) || undefined,
});

export const useTodayProgressQuery = () => {
  const { data, ...etc } = useSuspenseQuery(todayProgressOptions());
  const progress = data?.data.progress ?? 0;

  return { progress, ...etc };
};
