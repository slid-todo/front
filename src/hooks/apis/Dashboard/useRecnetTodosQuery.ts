import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getRecentTodos } from '@/apis/Dashboard/getRecentTodos';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BaseResponse } from '@/types/response';
import { CompletesResponse } from './useTodosOfGoalsQuery';

interface TodoResponse {
  completes: CompletesResponse[];
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
  data: {
    content: TodoResponse[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElement: number;
    pageable: {
      offset: number;
      pageNumber: number;
      paged: boolean;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      unpaged: boolean;
    };
    size: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
  };
}

const recentTodosOptions = (): UseQueryOptions<
  RecentTodosResponse,
  AxiosError
> => ({
  queryKey: [QUERY_KEYS.RECENT_TODOS],
  queryFn: getRecentTodos,
});

export const useRecentTodosQuery = () => {
  const { data, isLoading, isError, error } = useQuery(recentTodosOptions());
  const todos = data?.data.content ?? [];

  return { todos, isLoading, isError, error };
};
