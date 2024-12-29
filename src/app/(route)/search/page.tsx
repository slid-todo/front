'use client';

import { useEffect } from 'react';
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
    <div className="flex min-h-screen w-screen flex-col gap-16 bg-custom-white-100 p-16 md:px-200 xl:px-400 2xl:px-650">
      <SearchHeader />
      <SearchInput />
      <SearchContent />
    </div>
  );
}
