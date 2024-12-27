import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BasePageableTypes } from '@/types/pageable';
import { BaseResponse } from '@/types/response';
import { TodoCompletesResponse } from '../Todo/useTodayTodo';

interface TodoResponse {
  completes: TodoCompletesResponse[];
  createdAt: string;
  endDate: string;
  goalColor: string;
  goalTitle: string;
  startDate: string;
  todoId: number;
  todoLink: string;
  todoPic: string;
  todoStatus: string;
  todoTitle: string;
}

interface RecentTodosResponse extends BaseResponse {
  data: BasePageableTypes<TodoResponse[]>;
}

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
