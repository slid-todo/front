import { DateRange } from 'react-day-picker';
import { PLACEHOLDERS } from '@/constants/Placeholders';

export const formatDateRange = (range: DateRange | undefined) => {
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
