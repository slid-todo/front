import { useState } from 'react';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { TODO_MOCK_DATA } from '@/constants/TodoMockData';
import { Dropdown } from '@/components/common/Dropdown';
import { Input } from '@/components/common/Input';
import { DropdownIcon } from './DropdownIcon';

export const TodoModalTarget = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(''); // 추후 zustand로 변경할듯

  const handleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  // Dropdown에서 전달받은 아이템을 설정
  const handleSelectItem = (item: string) => {
    setSelectedItem(item); // 선택된 아이템 저장
    setIsOpenDropdown(false); // 드롭다운 닫기
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
          value={selectedItem} // 선택된 아이템 표시
          readOnly // 사용자 입력을 방지
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
      />
    </div>
  );
};
