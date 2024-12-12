import { useState } from 'react';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { TODO_MOCK_DATA } from '@/mocks/TodoMockData';
import { Dropdown } from '@/components/common/Dropdown';
import { Input } from '@/components/common/Input';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { Goal } from '@/types/Goals';
import { DropdownIcon } from './DropdownIcon';

export const TodoModalGoal = () => {
  const { goal, setGoal } = useTodoDataStore();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleSelectItem = (item: Goal) => {
    setGoal(item.goalId, item.goalTitle);
    setIsOpenDropdown(false);
  };

  const renderDropdownItem = (item: Goal) => {
    return <span>{item.goalTitle}</span>;
  };

  return (
    <div className="relative flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">목표</span>
      <div
        className={`flex items-center justify-between self-stretch ${isOpenDropdown ? 'rounded-t-12' : 'rounded-12'} bg-white pr-16`}
      >
        <Input
          className="cursor-pointer"
          placeholder={PLACEHOLDERS.TARGET}
          value={goal.goalTitle}
          readOnly
          onClick={handleDropdown}
        />
        <DropdownIcon
          isOpenDropdown={isOpenDropdown}
          onClick={handleDropdown}
        />
      </div>

      <Dropdown
        dropdownData={TODO_MOCK_DATA}
        onSelectItem={handleSelectItem}
        isOpenDropdown={isOpenDropdown}
        renderItem={renderDropdownItem}
      />
    </div>
  );
};
