import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getRecentTodos } from '@/apis/Dashboard/getRecentTodos';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { BaseResponse } from '@/types/response';

import { TodosResponse } from './useTodosOfGoalsQuery';

interface RecentTodosResponse extends BaseResponse {
  data: {
    content: TodosResponse[];
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
