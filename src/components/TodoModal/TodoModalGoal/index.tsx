import { useState } from 'react';

import { Dropdown } from '@/components/common/Dropdown';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { useGoalsQuery } from '@/hooks/apis/useGoalsQuery';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { Goal } from '@/types/Goals';
import { useTodoModalStore } from '@/store/useTodoModalStore';
import { cn } from '@/utils/className';
import { DropdownIcon } from './DropdownIcon';

export const TodoModalGoal = () => {
  const { goals } = useGoalsQuery();
  const { todoData, setTodoData } = useTodoDataStore();
  const { todoType } = useTodoModalStore();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const inputClass = cn(
    `flex items-center justify-between self-stretch 
    ${isOpenDropdown && todoType !== '수정' ? 'rounded-t-12' : 'rounded-12'} 
    bg-white pr-16 ${todoType === '수정' ? 'text-custom-gray-100' : ''}`,
  );

  const handleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleSelectItem = (item: Goal) => {
    setTodoData({ goalId: item.goalId, goalTitle: item.goalTitle });
    setIsOpenDropdown(false);
  };

  const renderDropdownItem = (item: Goal) => {
    return <span>{item.goalTitle}</span>;
  };

  return (
    <div className="relative flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">목표</span>
      <div className={inputClass}>
        <Input
          className="cursor-pointer"
          placeholder={PLACEHOLDERS.TARGET}
          value={todoData.goalTitle}
          readOnly
          onClick={handleDropdown}
        />
        <DropdownIcon
          isOpenDropdown={isOpenDropdown}
          hidden={todoType === '수정'}
          onClick={handleDropdown}
        />
      </div>

      {todoType !== '수정' && (
        <Dropdown
          dropdownData={goals}
          onSelectItem={handleSelectItem}
          isOpenDropdown={isOpenDropdown}
          renderItem={renderDropdownItem}
        />
      )}
    </div>
  );
};
