import { DayPicker, DateRange } from 'react-day-picker';
import { motion } from 'motion/react';
import { calendarVariants } from '@/constants/motionVariants';
import { Button } from '@/components/common/Button/Button';

import 'react-day-picker/style.css';

interface CalendarDropdownProps {
  isOpenCalendar: boolean;
  selected: DateRange | undefined;
  onSelectRange: (range: DateRange | undefined) => void;
  onClose: () => void;
}

export const CalendarDropdown = ({
  isOpenCalendar,
  selected,
  onSelectRange,
  onClose,
}: CalendarDropdownProps) => {
  return (
    <motion.div
      initial="closed"
      animate={isOpenCalendar ? 'open' : 'closed'}
      variants={calendarVariants}
      className="flex-center absolute inset-x-0 top-full z-10 origin-top flex-col rounded-b-12 bg-white pb-5 shadow-lg"
    >
      <DayPicker
        mode="range"
        selected={selected}
        onSelect={onSelectRange}
        disabled={{
          before: selected?.from || new Date(),
          after: new Date(
            (selected?.from || new Date()).getFullYear(),
            (selected?.from || new Date()).getMonth(),
            (selected?.from || new Date()).getDate() + 29,
          ),
        }}
      />
      <Button
        size="small"
        radius={false}
        className="h-30"
        disabled={selected ? false : true}
        onClick={onClose}
      >
        선택 완료
      </Button>
    </motion.div>
  );
};
