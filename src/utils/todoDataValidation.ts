export const todoDataValidation = (
  title: string,
  goalTitle: number,
  date: { startDate: Date | undefined; endDate: Date | undefined },
) => {
  if (title && goalTitle && date.startDate && date.endDate) {
    return false;
  }
  return true;
};
