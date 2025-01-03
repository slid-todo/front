'use client';

import { useEffect } from 'react';

import { PageContainer } from '@/components/common/PageContainer';
import { SearchContent } from '@/components/Search/SearchContent';
import { SearchHeader } from '@/components/Search/SearchHeader';
import { SearchInput } from '@/components/Search/SearchInput';
import { useSearchStore } from '@/store/useSearchStore';

export default function SearchPage() {
  const { setSearchFilter, setSearchKeyword } = useSearchStore();

  useEffect(() => {
    setSearchFilter('유저명');
    setSearchKeyword('');
  }, [setSearchFilter, setSearchKeyword]);

  return (
    <PageContainer>
      <SearchHeader />
      <SearchInput />
      <SearchContent />
    </PageContainer>
  );
}
