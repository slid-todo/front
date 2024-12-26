import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';

export interface CompletesResponse {
  completeId: number;
  completePic: string;
  note: string;
  completeLink: string;
  completeFile: string;
  createdAt: string;
  completedDate: string;
}

export interface TodosResponse {
  todoId: number;
  todoTitle: string;
  startDate: string;
  endDate: string;
  todoStatus: string;
  todoLink: string;
  todoPic: string;
  createdAt: string;
  completes: CompletesResponse[];
}

export interface GoalsResponse {
  goalId: number;
  goalTitle: string;
  goalColor: string;
  progress: number;
  todos: TodosResponse[];
}

export interface TodosOfGoalsResponse {
  data: GoalsResponse[];
  statusCode: number;
  timestamp: string;
}

export const todosOfGoalsOptions = (): UseQueryOptions<
  TodosOfGoalsResponse,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.TODOS_OF_GOALS],
  queryFn: () =>
    GET<TodosOfGoalsResponse>(
      `${API_ENDPOINTS.TODOS.GET_GOALS}?lastTodoId=0&size=3`,
    ),
});

export const useTodosOfGoalsQuery = () => {
  const { data, isLoading, isError, error } = useQuery(todosOfGoalsOptions());
  const goals = data?.data ?? [];

  return { goals, isLoading, isError, error };
};
