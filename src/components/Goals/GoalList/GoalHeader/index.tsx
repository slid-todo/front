import { FaEllipsisVertical, FaFlag } from 'react-icons/fa6';

import { Dropdown } from '@/components/common/Dropdown';
import { useSelectGoalMenu } from '@/hooks/useSelectGoalMenu';

interface GoalHeaderProps {
  id: number;
  title: string;
  color: string;
}

export const GoalHeader = ({ id, title, color }: GoalHeaderProps) => {
  const { isOpen, handleOpenMenu, handleCloseMenu, handleSelectItem } =
    useSelectGoalMenu({ id, title });

  const renderDropdownItem = (item: { value: string }) => {
    return <span>{item.value} </span>;
  };

  const dropdownData = ['할일추가', '수정하기', '삭제하기'].map((str) => ({
    value: str,
  }));

  return (
    <>
      <span className="inline-flex items-center text-base-semibold">
        <FaFlag className="mr-4 size-24 p-2" style={{ fill: color }} />
        {title}
      </span>
      <button
        onBlur={handleCloseMenu}
        onClick={handleOpenMenu}
        className="absolute right-16 top-16 flex items-center text-primary-100"
      >
        <FaEllipsisVertical className="size-24 p-2 text-custom-gray-100" />
      </button>
      <div className="absolute right-16 top-44 w-81">
        <Dropdown
          dropdownData={dropdownData}
          onSelectItem={handleSelectItem}
          isOpenDropdown={isOpen}
          renderItem={renderDropdownItem}
        />
      </div>
    </>
  );
};
