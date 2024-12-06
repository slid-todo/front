import { useState } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { PiTildeBold } from 'react-icons/pi';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';

export const TodoModalRepeat = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <div className="relative flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">기간</span>
      <div className="flex-center w-full gap-10">
        <div
          className={`flex items-center justify-between self-stretch ${isOpenDropdown ? 'rounded-t-12' : 'rounded-12'} bg-white pr-16`}
        >
          <Input placeholder={PLACEHOLDERS.START_DATE} />
          <IoCalendarNumberOutline
            className="size-24 cursor-pointer"
            onClick={handleDropdown}
          />
        </div>
        <PiTildeBold className="size-20" />
        <div
          className={`flex items-center justify-between self-stretch ${isOpenDropdown ? 'rounded-t-12' : 'rounded-12'} bg-white pr-16`}
        >
          <Input placeholder={PLACEHOLDERS.END_DATE} />
          <IoCalendarNumberOutline
            className="size-24 cursor-pointer"
            onClick={handleDropdown}
          />
        </div>
      </div>
    </div>
  );
};
