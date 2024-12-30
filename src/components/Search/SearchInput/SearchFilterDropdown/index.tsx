import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { Dropdown } from '@/components/common/Dropdown';
import { SEARCH_FILTER_ARRAY } from '@/constants/SearchFilterArray';

interface filterType {
  searchFilter: string;
}

interface SearchFilterDropdownProps {
  localFilter: string;
  setLocalFilter: (filter: string) => void;
}

export const SearchFilterDropdown = ({
  localFilter,
  setLocalFilter,
}: SearchFilterDropdownProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleSelectItem = (item: filterType) => {
    setLocalFilter(item.searchFilter);
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
      className="relative flex w-80 cursor-pointer items-center gap-4"
      onClick={handleDropdown}
    >
      <span className="text-sm-medium text-custom-gray-100">{localFilter}</span>
      <FaAngleDown
        className={`size-14 cursor-pointer text-custom-gray-100 transition-transform duration-300 ${isOpenDropdown ? 'rotate-180' : ''}`}
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
