'use client';

import { useEffect } from 'react';

import { useSearchStore } from '@/store/useSearchStore';
import { useSearchQuery } from '@/hooks/apis/Search/useSearchQuery';

import { SearchUserList } from './SearchUserList';
import { SearchGoalList } from './SearchGoalList';

export const SearchContent = () => {
  const { searchFilter, searchKeyword } = useSearchStore();
  const {
    data: searchData,
    refetch,
    isError,
    error,
  } = useSearchQuery({
    searchField: searchFilter,
    keyword: searchKeyword,
  });

  useEffect(() => {
    if (searchKeyword || searchFilter) {
      refetch();
    }
  }, [searchKeyword, searchFilter, refetch]);

  return (
    <div>
      {searchFilter === '유저명' ? (
        <SearchUserList
          isError={isError}
          error={error}
          searchData={searchData}
          keyword={searchKeyword}
        />
      ) : (
        <SearchGoalList
          isError={isError}
          error={error}
          searchData={searchData}
          keyword={searchKeyword}
        />
      )}
    </div>
  );
};
