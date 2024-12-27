import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BasePageableTypes } from '@/types/pageable';
import { BaseResponse } from '@/types/response';

export interface CompletesResponse {
  completeId: number;
  completePic: string;
  note: string;
  completeLink: string;
  completeStatus: string;
  createdAt: string;
  startDate: string;
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

export interface TodosOfGoalsResponse extends BaseResponse {
  data: BasePageableTypes<GoalsResponse[]>;
}

interface InfiniteQueryResponse {
  pageParams: number[];
  pages: TodosOfGoalsResponse[];
}

export const todosOfGoalsOptions = (): UseInfiniteQueryOptions<
  TodosOfGoalsResponse,
  AxiosError,
  InfiniteQueryResponse
> => ({
  queryKey: [QUERY_KEYS.TODOS_OF_GOALS],
  queryFn: ({ pageParam = 0 }) =>
    GET<TodosOfGoalsResponse>(
      `${API_ENDPOINTS.TODOS.GET_GOALS}?lastGoalId=${pageParam}&size=3`,
    ),
  getNextPageParam: (lastPage) => {
    const nextCursor = lastPage.data.nextCursor;
    return nextCursor !== 0 ? nextCursor : undefined;
  },
  initialPageParam: 0,
});

export const useTodosOfGoalsQuery = () => {
  const { data, ...etc } = useInfiniteQuery(todosOfGoalsOptions());
  const goals = data?.pages.flatMap((page) => page.data.content) ?? [];

  return { goals, ...etc };
};
