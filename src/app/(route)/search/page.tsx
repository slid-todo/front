'use client';

import { useEffect } from 'react';

import { useSearchParams, useRouter } from 'next/navigation';
import { PageContainer } from '@/components/common/PageContainer';
import { SearchContent } from '@/components/Search/SearchContent';
import { SearchHeader } from '@/components/Search/SearchHeader';
import { SearchInput } from '@/components/Search/SearchInput';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchFilter = searchParams.get('filter') || '유저명';
  const searchKeyword = searchParams.get('keyword') || '';

  useEffect(() => {
    if (!searchParams.has('filter') || !searchParams.has('keyword')) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('filter', '유저명');
      newParams.set('keyword', '');
      router.push(`?${newParams.toString()}`);
    }
  }, [router, searchParams]);

  return (
    <PageContainer>
      <SearchHeader />
      <SearchInput
        currentFilter={searchFilter}
        currentKeyword={searchKeyword}
      />
      <SearchContent
        currentFilter={searchFilter}
        currentKeyword={searchKeyword}
      />
    </PageContainer>
  );
}
