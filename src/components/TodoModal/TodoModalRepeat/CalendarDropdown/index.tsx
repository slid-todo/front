import { DayPicker, DateRange } from 'react-day-picker';
import { motion } from 'motion/react';
import { calendarVariants } from '@/utils/motionVariants';

import 'react-day-picker/style.css';

interface CalendarDropdownProps {
  isOpenCalendar: boolean;
  selected: DateRange | undefined;
  onSelectRange: (range: DateRange | undefined) => void;
}

export const CalendarDropdown = ({
  isOpenCalendar,
  selected,
  onSelectRange,
}: CalendarDropdownProps) => {
  return (
    <motion.div
      initial="closed"
      animate={isOpenCalendar ? 'open' : 'closed'}
      variants={calendarVariants}
      className="flex-center absolute inset-x-0 top-full z-10 origin-top rounded-b-12 bg-white shadow-lg"
    >
      <DayPicker
        className="relative"
        mode="range"
        defaultMonth={new Date()}
        selected={selected}
        onSelect={onSelectRange}
      />
    </motion.div>
  );
};
