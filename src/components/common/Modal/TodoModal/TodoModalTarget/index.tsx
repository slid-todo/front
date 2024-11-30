import { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { Dropdown } from '@/components/common/Dropdown';
import { TODO_MOCK_DATA } from '@/constants/TodoMockData';

export const TodoModalTarget = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(''); // 추후 zustand로 변경할듯

  const handleOpenDropdown = () => {
    setIsOpenDropdown(true);
  };

  const handleCloseDropdown = () => {
    setIsOpenDropdown(false);
  };

  // Dropdown에서 전달받은 아이템을 설정
  const handleSelectItem = (item: string) => {
    setSelectedItem(item); // 선택된 아이템 저장
    setIsOpenDropdown(false); // 드롭다운 닫기
  };

  return (
    <div className="relative flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">목표</span>
      <div className=" flex items-center justify-between self-stretch rounded-12 bg-slate-50 px-20 py-12 text-sm-normal sm:text-base-normal ">
        <input
          className="bg-slate-50 focus:outline-none"
          placeholder={PLACEHOLDERS.TARGET}
          value={selectedItem} // 선택된 아이템 표시
          readOnly // 사용자 입력을 방지
        />
        {isOpenDropdown ? (
          <IoMdArrowDropup
            className="size-24 cursor-pointer"
            onClick={handleCloseDropdown}
          />
        ) : (
          <IoMdArrowDropdown
            className="size-24 cursor-pointer"
            onClick={handleOpenDropdown}
          />
        )}
      </div>
      {isOpenDropdown ? (
        <Dropdown
          dropdownData={TODO_MOCK_DATA}
          onSelectItem={handleSelectItem}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
