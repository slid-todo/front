export const formatDateToPoint = (dateString: string) => {
  if (!dateString) return '';

  const date = new Date(dateString);

  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${day}`;
};

export const formatDateToRelativeTime = (dateString: string): string => {
  if (!dateString) return '';

  const date = new Date(dateString);
  const now = new Date();
  const timeDifference = date.getTime() - now.getTime();
  const rtf = new Intl.RelativeTimeFormat('ko', { numeric: 'auto' });

  const seconds = Math.floor(timeDifference / 1000);
  if (Math.abs(seconds) < 60) {
    return rtf.format(seconds, 'second');
  }

  const minutes = Math.floor(seconds / 60);
  if (Math.abs(minutes) < 60) {
    return rtf.format(minutes, 'minute');
  }

  const hours = Math.floor(minutes / 60);
  if (Math.abs(hours) < 24) {
    return rtf.format(hours, 'hour');
  }

  const days = Math.floor(hours / 24);
  if (Math.abs(days) < 30) {
    return rtf.format(days, 'day');
  }

  const months = Math.floor(days / 30);
  if (Math.abs(months) < 12) {
    return rtf.format(months, 'month');
  }

  const years = Math.floor(months / 12);
  return rtf.format(years, 'year');
};

export const isDatePast = (dateString: string): boolean => {
  if (!dateString) return false;

  const today = new Date().setHours(0, 0, 0, 0);
  const thisDay = new Date(dateString).setHours(0, 0, 0, 0);

  return today > thisDay;
};

export const compareDates = (a: string, b: string) => {
  const dateA = new Date(a);
  const dateB = new Date(b);

  return dateA.getTime() - dateB.getTime();
};
