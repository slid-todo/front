import { useState } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { TodoDateType } from '@/types/TodoDateType';

interface DateProps {
  type: TodoDateType;
}

export const Date = ({ type }: DateProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
    console.log(`${type}`);
  };

  return (
    <div
      className={`flex items-center justify-between self-stretch ${isOpenDropdown ? 'rounded-t-12' : 'rounded-12'} bg-white pr-16`}
    >
      <Input placeholder={PLACEHOLDERS.START_DATE} />
      <IoCalendarNumberOutline
        className="size-24 cursor-pointer"
        onClick={handleDropdown}
      />
    </div>
  );
};
