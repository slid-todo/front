import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Goal } from '@/types/Goals';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { getSearch } from '@/apis/Search/getSearch';
import { useSearchStore } from '@/store/useSearchStore';

export interface SearchResponseData {
  name: string;
  profilePic: string;
  goals: Goal[];
}

export interface SearchResponse {
  statusCode: number;
  data: SearchResponseData[];
  timestamp: string;
}

export interface SearchRequest {
  searchField: string;
  keyword: string;
}

const searchOptions = (
  request: SearchRequest,
  isSearchClicked: boolean,
  searchKeyword: string,
): UseQueryOptions<SearchResponse, AxiosError> => ({
  queryKey: [QUERY_KEYS.SEARCH_DATA],
  queryFn: () => getSearch(request),
  enabled: isSearchClicked && Boolean(searchKeyword),
});

export const useSearchQuery = (request: SearchRequest) => {
  const { isSearchClicked, searchKeyword } = useSearchStore();
  const { data, isLoading, isError, error } = useQuery(
    searchOptions(request, isSearchClicked, searchKeyword),
  );
  return { data, isLoading, isError, error };
};
