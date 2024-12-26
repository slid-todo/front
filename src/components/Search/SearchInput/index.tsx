'use client';

import { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { useSearchStore } from '@/store/useSearchStore';
import { SearchFilterDropdown } from './SearchFilterDropdown';

export const SearchInput = () => {
  const { searchKeyword, setSearchKeyword, setIsSearchClicked } =
    useSearchStore();

  const handleKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleClick = () => {
    setIsSearchClicked(true);
  };

  return (
    <div className="flex h-48 w-full items-center justify-between rounded-62 bg-white px-16 py-8">
      <div className="flex items-center gap-16">
        <SearchFilterDropdown />
        <Input
          className="px-0"
          placeholder={PLACEHOLDERS.SEARCH}
          value={searchKeyword}
          onChange={handleKeyword}
        />
      </div>
      <FaSearch
        className="size-18 cursor-pointer text-custom-gray-100"
        onClick={handleClick}
      />
    </div>
  );
};
