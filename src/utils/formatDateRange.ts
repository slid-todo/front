import { DateRange } from 'react-day-picker';
import { PLACEHOLDERS } from '@/constants/Placeholders';

export const formatDate = (date: Date | undefined) => {
  if (!date) {
    return '';
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formatDateRange = (range: DateRange | undefined) => {
  if (!range || !range.from || !range.to) return PLACEHOLDERS.DATE_RANGE;

  return `${formatDate(range.from)} ~ ${formatDate(range.to)}`;
};
