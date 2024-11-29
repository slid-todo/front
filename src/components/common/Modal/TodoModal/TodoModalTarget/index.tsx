import { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { cn } from '@/utils/className';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { TODO_MOCK_DATA } from '@/constants/TodoMockData';

export const TodoModalTarget = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const dropdownIconClass = cn('size-24 cursor-pointer');

  const handleOpenDropdown = () => {
    setIsOpenDropdown(true);
  };

  const handleCloseDropdown = () => {
    setIsOpenDropdown(false);
  };

  return (
    <div className="relative flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">목표</span>
      <div className=" flex items-center justify-between self-stretch rounded-12 bg-slate-50 px-20 py-12 text-sm-normal sm:text-base-normal ">
        <input
          className="bg-slate-50 focus:outline-none"
          placeholder={PLACEHOLDERS.TARGET}
        />
        {isOpenDropdown ? (
          <IoMdArrowDropdown
            className={dropdownIconClass}
            onClick={handleCloseDropdown}
          />
        ) : (
          <IoMdArrowDropup
            className={dropdownIconClass}
            onClick={handleOpenDropdown}
          />
        )}
      </div>
      {isOpenDropdown ? <Dropdown dropdownData={TODO_MOCK_DATA} /> : <></>}
    </div>
  );
};
