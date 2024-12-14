import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getTodayTodos } from '@/apis/Dashboard/getTodayTodos';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BaseResponse } from '@/types/response';

import { TodosResponse } from './useTodosOfGoalsQuery';

interface TodayTodosResponse extends BaseResponse {
  data: TodosResponse[];
}

const todayTodosOptions = (): UseQueryOptions<
  TodayTodosResponse,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.TODAY_TODOS],
  queryFn: getTodayTodos,
});

export const useTodayTodosQuery = () => {
  const { data, isLoading, isError, error } = useQuery(todayTodosOptions());
  const todos = data?.data ?? [];

  return { todos, isLoading, isError, error };
};
