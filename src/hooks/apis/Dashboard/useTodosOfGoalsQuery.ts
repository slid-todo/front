import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getTodosOfGoals } from '@/apis/Dashboard/getTodosOfGoals';
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
  todos: TodosResponse[];
}

export interface TodosOfGoalsResponse {
  data: GoalsResponse[];
  statusCode: number;
  timestamp: string;
}

const todosOfGoalsOptions = (): UseQueryOptions<
  TodosOfGoalsResponse,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.TODOS_OF_GOALS],
  queryFn: getTodosOfGoals,
});

export const useTodosOfGoalsQuery = () => {
  const { data, isLoading, isError, error } = useQuery(todosOfGoalsOptions());
  const goals = data?.data ?? [];

  return { goals, isLoading, isError, error };
};
