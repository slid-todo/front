import { DayPicker } from 'react-day-picker';
import { motion } from 'motion/react';
import { calendarVariants } from '@/utils/motionVariants';

interface CalendarDropdownProps {
  isOpenCalendar: boolean;
}

export const CalendarDropdown = ({ isOpenCalendar }: CalendarDropdownProps) => {
  return (
    <motion.div
      initial="closed"
      animate={isOpenCalendar ? 'open' : 'closed'}
      variants={calendarVariants}
      className="flex-center absolute inset-x-0 top-full z-10 origin-top rounded-b-12 bg-white shadow-lg"
    >
      <DayPicker className="relative" mode="range" />
    </motion.div>
  );
};
