import { useState } from 'react';
import { FaEllipsisVertical, FaFlag } from 'react-icons/fa6';

import { Dropdown } from '@/components/common/Dropdown';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { useTodoModalStore } from '@/store/useTodoModalStore';

interface GoalHeaderProps {
  id: number;
  title: string;
  color: string;
}

export const GoalHeader = ({ id, title, color }: GoalHeaderProps) => {
  const openModal = useTodoModalStore((state) => state.open);
  const setTodoData = useTodoDataStore((state) => state.setTodoData);

  const [selectMode, setSelectMode] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleSelectItem = (item: { value: string }) => {
    setSelectMode(item.value);
    setIsOpen(false);
    if (item.value === '할일추가') {
      openModal('생성');
      setTodoData({ goalId: id, goalTitle: title });
    } else if (item.value === '수정하기') {
      openModal('수정');
      setTodoData({ goalId: id, goalTitle: title });
    } else if (item.value === '삭제하기') {
      console.log(item.value, '삭제');
    }
  };

  const renderDropdownItem = (item: { value: string }) => {
    return <span>{item.value}</span>;
  };

  const dropdownData = ['할일추가', '수정하기', '삭제하기'].map((str) => ({
    value: str,
  }));

  console.log(selectMode);

  return (
    <>
      <span className="inline-flex items-center text-base-semibold">
        <FaFlag className="mr-4 size-24 p-2" style={{ fill: color }} />
        {title}
      </span>
      <button
        onBlur={handleCloseMenu}
        onClick={handleClickMenu}
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
