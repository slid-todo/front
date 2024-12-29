'use client';

import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { useSearchStore } from '@/store/useSearchStore';
import { SearchFilterDropdown } from './SearchFilterDropdown';

export const SearchInput = () => {
  const [localKeyword, setLocalKeyword] = useState('');
  const [localFilter, setLocalFilter] = useState('유저명');
  const { setSearchKeyword, setSearchFilter } = useSearchStore();

  const handleKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalKeyword(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = () => {
    setSearchKeyword(localKeyword);
    setSearchFilter(localFilter);
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
        onClick={handleClick}
      />
    </div>
  );
};
