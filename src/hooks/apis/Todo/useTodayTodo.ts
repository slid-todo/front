import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BaseResponse } from '@/types/response';
import { CompletesResponse } from '../Dashboard/useTodosOfGoalsQuery';

interface TodayTodoItem {
  todoId: number;
  todoTitle: string;
  complete: CompletesResponse;
}

interface TodayTodoResponse extends BaseResponse {
  data: TodayTodoItem[];
}

export const todayTodoOptions = (): UseQueryOptions<
  TodayTodoResponse,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.TODAY_TODO],
  queryFn: () => GET<TodayTodoResponse>(API_ENDPOINTS.TODOS.GET_TODAY_TODOS),
});

export const useTodayTodoQuery = () => {
  const { data, isLoading, isError, error } = useQuery(todayTodoOptions());

  const todayTodos = data?.data ?? [];

  return { todayTodos, isLoading, isError, error };
};
