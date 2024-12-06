import { useState } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';

import 'react-day-picker/style.css';
import { CalendarDropdown } from './CalendarDropdown';

export const Date = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const handleCalendar = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };

  return (
    <div className="flex w-full flex-col">
      <div
        className={`flex items-center justify-between self-stretch ${isOpenCalendar ? 'rounded-t-12' : 'rounded-12'} bg-white pr-16`}
        onClick={handleCalendar}
      >
        <Input
          className="cursor-pointer"
          placeholder={PLACEHOLDERS.DATE_RANGE}
          readOnly
        />
        <IoCalendarNumberOutline
          className="size-24 cursor-pointer"
          onClick={handleCalendar}
        />
      </div>
      <CalendarDropdown isOpenCalendar={isOpenCalendar} />
    </div>
  );
};
