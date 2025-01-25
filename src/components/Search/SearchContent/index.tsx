'use client';

import { useEffect } from 'react';
import { useSearchQuery } from '@/hooks/apis/Search/useSearchQuery';

import { SearchUserList } from './SearchUserList';
import { SearchGoalList } from './SearchGoalList';

interface SearchContentProps {
  currentFilter: string;
  currentKeyword: string;
}

export const SearchContent = ({
  currentFilter,
  currentKeyword,
}: SearchContentProps) => {
  const {
    data: searchData,
    refetch,
    isError,
    error,
  } = useSearchQuery({
    searchField: currentFilter,
    keyword: currentKeyword,
  });

  useEffect(() => {
    if (currentFilter || currentKeyword) {
      refetch();
    }
  }, [currentFilter, currentKeyword, refetch]);

  return (
    <div className="overflow-y-auto">
      {currentFilter === '유저명' ? (
        <SearchUserList
          isError={isError}
          error={error}
          searchData={searchData}
          keyword={currentKeyword}
        />
      ) : (
        <SearchGoalList
          isError={isError}
          error={error}
          searchData={searchData}
          keyword={currentKeyword}
        />
      )}
    </div>
  );
};
