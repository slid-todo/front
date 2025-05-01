import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { API } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BaseResponse } from '@/types/response';

export interface TodoCompletesResponse {
  completeId: number;
  completePic: string;
  note: string;
  completeLink: string;
  completeStatus: string;
  createdAt: string;
  startDate: string;
}

export interface TodayTodoItem {
  todoId: number;
  todoTitle: string;
  goalTitle: string;
  goalColor: string;
  complete: TodoCompletesResponse;
}

interface TodayTodoResponse extends BaseResponse {
  data: TodayTodoItem[];
}

export const todayTodoOptions = (): UseQueryOptions<
  TodayTodoResponse,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.TODAY_TODO],
  queryFn: () =>
    API.get<TodayTodoResponse>(API_ENDPOINTS.TODOS.GET_TODAY_TODOS),
});

export const useTodayTodoQuery = () => {
  const { data, isLoading, isError, error } = useQuery(todayTodoOptions());

  const todayTodos = data?.data ?? [];

  return { todayTodos, isLoading, isError, error };
};
