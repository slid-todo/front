export const todoDataValidation = (
  title: string,
  goalTitle: number,
  date: { startDate: string; endDate: string },
) => {
  if (title && goalTitle && date.startDate && date.endDate) {
    return false;
  }
  return true;
};
