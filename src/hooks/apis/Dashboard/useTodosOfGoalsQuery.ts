import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { API } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { TodosOfGoalsResponse } from '@/types/Dashboard';
import { BaseInfiniteQueryResponse } from '@/types/response';

export const todosOfGoalsOptions = (): UseInfiniteQueryOptions<
  TodosOfGoalsResponse,
  AxiosError,
  BaseInfiniteQueryResponse<TodosOfGoalsResponse[]>
> => ({
  queryKey: [QUERY_KEYS.TODOS_OF_GOALS],
  queryFn: ({ pageParam = 0 }) =>
    API.get<TodosOfGoalsResponse>(
      `${API_ENDPOINTS.TODOS.GET_GOALS}?lastGoalId=${pageParam}&size=5`,
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
