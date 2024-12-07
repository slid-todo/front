import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { CalendarDropdown } from './CalendarDropdown';

export const TodoModalRepeat = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  const handleCalendar = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };

  const formatDateRange = (range: DateRange | undefined) => {
    if (!range || !range.from || !range.to) return PLACEHOLDERS.DATE_RANGE;
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return `${range.from.toLocaleDateString('ko-KR', options)} ~ ${range.to.toLocaleDateString(
      'ko-KR',
      options,
    )}`;
  };

  return (
    <div className="relative flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">기간</span>
      <div className="flex w-full flex-col">
        <div
          className={`flex items-center justify-between self-stretch ${isOpenCalendar ? 'rounded-t-12' : 'rounded-12'} bg-white pr-16`}
          onClick={handleCalendar}
        >
          <Input
            className="cursor-pointer"
            placeholder={PLACEHOLDERS.DATE_RANGE}
            value={formatDateRange(selectedRange)}
            readOnly
          />
          <IoCalendarNumberOutline
            className="size-24 cursor-pointer"
            onClick={handleCalendar}
          />
        </div>
        <CalendarDropdown
          isOpenCalendar={isOpenCalendar}
          selected={selectedRange}
          onSelectRange={setSelectedRange}
        />
      </div>
    </div>
  );
};
