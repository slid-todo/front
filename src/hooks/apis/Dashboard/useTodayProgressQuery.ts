import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BaseResponse } from '@/types/response';

interface ProgressResponse {
  progress: number;
}

interface TodayProgressResponse extends BaseResponse {
  data: ProgressResponse;
}

export const todayProgressOptions = (): UseQueryOptions<
  TodayProgressResponse,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.TODAY_PROGRESS],
  queryFn: () =>
    GET<TodayProgressResponse>(API_ENDPOINTS.TODOS.GET_TODAY_PROGRESS),
});

export const useTodayProgressQuery = () => {
  const { data, isLoading, isError, error } = useQuery(todayProgressOptions());
  const progress = data?.data.progress ?? 0;

  return { progress, isLoading, isError, error };
};
