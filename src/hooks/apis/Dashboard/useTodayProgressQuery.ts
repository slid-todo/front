import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getTodayProgress } from '@/apis/Dashboard/getTodayProgress';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BaseResponse } from '@/types/response';

interface ProgressResponse {
  progress: number;
}

interface TodayProgressResponse extends BaseResponse {
  data: ProgressResponse;
}

const todayProgressOptions = (): UseQueryOptions<
  TodayProgressResponse,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.TODAY_PROGRESS],
  queryFn: getTodayProgress,
});

export const useTodayProgressQuery = () => {
  const { data, isLoading, isError, error } = useQuery(todayProgressOptions());
  const progress = data?.data.progress ?? 0;

  return { progress, isLoading, isError, error };
};
