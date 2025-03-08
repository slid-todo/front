import {
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { RecentTodosResponse } from '@/types/Dashboard';

export const recentTodosOptions = (
  token?: string,
): UseSuspenseQueryOptions<RecentTodosResponse, AxiosError> => ({
  queryKey: [QUERY_KEYS.RECENT_TODOS],
  queryFn: () =>
    GET<RecentTodosResponse>(
      `${API_ENDPOINTS.TODOS.GET_ALL}?lastTodoId=0&size=3`,
      token,
    ),
});

export const useRecentTodosQuery = () => {
  const { data, ...etc } = useSuspenseQuery(recentTodosOptions());
  const todos = data?.data.content ?? [];

  return { todos, ...etc };
};
