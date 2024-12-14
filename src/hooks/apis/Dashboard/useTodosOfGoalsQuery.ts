import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getTodosOfGoals } from '@/apis/Dashboard/getTodosOfGoals';
import { QUERY_KEYS } from '@/constants/QueryKeys';

interface CompletesResponse {
  completeId: number;
  completePic: string;
  note: string;
  completeLink: string;
  completeFile: string;
  createdAt: string;
  completedDate: string;
}

interface TodosResponse {
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

interface GoalsResponse {
  goalId: number;
  goalTitle: string;
  todos: TodosResponse[];
}

interface TodosOfGoalsResponse {
  data: GoalsResponse[];
  statusCode: number;
  timestamp: string;
}

const todosOfGoalsOptions: UseQueryOptions<TodosOfGoalsResponse, AxiosError> = {
  queryKey: [QUERY_KEYS.TODOS_OF_GOALS],
  queryFn: getTodosOfGoals,
};

export const useTodosOfGoals = () => {
  const { data, isLoading, isError, error } = useQuery(todosOfGoalsOptions);
  console.log(data);

  return { data, isLoading, isError, error };
};
