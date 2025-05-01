import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { TodoDetailResponse } from '@/types/response';

const todoDetailOptions = (
  todoId: number,
): UseQueryOptions<TodoDetailResponse, AxiosError> => ({
  queryKey: [QUERY_KEYS.TODOS_DETAIL, todoId],
  queryFn: () =>
    GET<TodoDetailResponse>(API_ENDPOINTS.TODOS.GET_DETAIL(todoId)),
});

export const useTodoDetailQuery = (todoId: number) => {
  const { data, isLoading, error, isError } = useQuery(
    todoDetailOptions(todoId),
  );
  const details = data?.data;

  return { details, isLoading, error, isError };
};
