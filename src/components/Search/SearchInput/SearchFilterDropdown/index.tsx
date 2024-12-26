import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Dropdown } from '@/components/common/Dropdown';
import { SEARCH_FILTER_ARRAY } from '@/constants/SearchFilterArray';
import { useSearchStore } from '@/store/useSearchStore';

interface filterType {
  searchFilter: string;
}

export const SearchFilterDropdown = () => {
  const { searchFilter, setSearchFilter } = useSearchStore();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleSelectItem = (item: filterType) => {
    setSearchFilter(item.searchFilter);
  };

  const renderDropdownItem = (item: filterType) => {
    return (
      <span className="text-sm-medium text-custom-gray-100">
        {item.searchFilter}
      </span>
    );
  };

  return (
    <div
      className="relative flex w-80 cursor-pointer items-center gap-2"
      onClick={handleDropdown}
    >
      <span className="text-sm-medium text-custom-gray-100">
        {searchFilter}
      </span>
      <IoMdArrowDropdown
        className={`size-18 cursor-pointer text-custom-gray-100 transition-transform duration-300 ${isOpenDropdown ? 'rotate-180' : ''}`}
      />
      <Dropdown
        dropdownData={SEARCH_FILTER_ARRAY}
        onSelectItem={handleSelectItem}
        renderItem={renderDropdownItem}
        isOpenDropdown={isOpenDropdown}
      />
    </div>
  );
};
