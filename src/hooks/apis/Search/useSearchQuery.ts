import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Goal } from '@/types/Goals';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { getSearch } from '@/apis/Search/getSearch';

export interface SearchResponseData {
  name: string;
  profilePic: string;
  goals: Goal[];
}

export interface SearchResponse {
  statusCode: number;
  data: SearchResponseData[];
  timestamp: string;
  message: string;
}

export interface SearchRequest {
  searchField: string;
  keyword: string;
}

const searchOptions = (
  request: SearchRequest,
): UseQueryOptions<SearchResponse, AxiosError> => ({
  queryKey: [QUERY_KEYS.SEARCH_DATA],
  queryFn: () => getSearch(request),
});

export const useSearchQuery = (request: SearchRequest) => {
  return useQuery(searchOptions(request));
};
