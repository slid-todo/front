import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { RecentTodosResponse } from '@/types/response';

export const recentTodosOptions = (): UseQueryOptions<
  RecentTodosResponse,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.RECENT_TODOS],
  queryFn: () =>
    GET<RecentTodosResponse>(
      `${API_ENDPOINTS.TODOS.GET_ALL}?lastTodoId=0&size=3`,
    ),
});

export const useRecentTodosQuery = () => {
  const { data, ...etc } = useQuery(recentTodosOptions());
  const todos = data?.data.content ?? [];

  return { todos, ...etc };
};
