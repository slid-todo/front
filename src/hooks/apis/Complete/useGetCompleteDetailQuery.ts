import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { GET } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { TodoDetailResponse } from '@/types/response';

const GetCompleteDetailOptions = (
  completeId: number,
): UseQueryOptions<TodoDetailResponse, AxiosError> => ({
  queryKey: [QUERY_KEYS.COMPLETE_DETAIL, completeId],
  queryFn: () =>
    GET<TodoDetailResponse>(API_ENDPOINTS.TODOS.GET_CERTIFIED_TODO(completeId)),
});

export const useGetCompleteDetailQuery = (completeId: number) => {
  const { data, isLoading, error, isError } = useQuery(
    GetCompleteDetailOptions(completeId),
  );
  const complete = data?.data;

  return { complete, isLoading, error, isError };
};
