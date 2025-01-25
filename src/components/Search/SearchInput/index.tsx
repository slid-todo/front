'use client';

import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { SearchFilterDropdown } from './SearchFilterDropdown';

interface SearchInputProps {
  currentFilter: string;
  currentKeyword: string;
}

export const SearchInput = ({
  currentFilter,
  currentKeyword,
}: SearchInputProps) => {
  const router = useRouter();

  const [localKeyword, setLocalKeyword] = useState(currentKeyword);
  const [localFilter, setLocalFilter] = useState(currentFilter);

  const handleKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalKeyword(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateSearchParams();
    }
  };

  const updateSearchParams = () => {
    const newParams = new URLSearchParams();
    newParams.set('filter', localFilter);
    newParams.set('keyword', localKeyword);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="flex h-48 w-full items-center justify-between rounded-62 bg-white px-16 py-8">
      <div className="flex items-center gap-16">
        <SearchFilterDropdown
          localFilter={localFilter}
          setLocalFilter={setLocalFilter}
        />
        <Input
          className="px-0"
          placeholder={PLACEHOLDERS.SEARCH}
          value={localKeyword}
          onChange={handleKeyword}
          onKeyDown={handleKeyPress}
        />
      </div>
      <FaSearch
        className="size-18 cursor-pointer text-custom-gray-100"
        onClick={updateSearchParams}
      />
    </div>
  );
};
