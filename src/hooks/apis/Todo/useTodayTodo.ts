import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BaseResponse } from '@/types/response';
import { CompletesResponse } from '../Dashboard/useTodosOfGoalsQuery';

interface TodayTodoResponese extends BaseResponse {
  data: {
    todoId: number;
    todoTitle: string;
    complete: CompletesResponse[];
  };
}

export const todayTodoOptions = (): UseQueryOptions<
  TodayTodoResponese,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.TODAY_TODO],
  queryFn: () => GET<TodayTodoResponese>(API_ENDPOINTS.TODOS.GET_TODAY_TODOS),
});

export const useTodayProgressQuery = () => {
  const { data, isLoading, isError, error } = useQuery(todayTodoOptions());

  const todayTodos = data?.data.complete ?? [];

  return { todayTodos, isLoading, isError, error };
};
