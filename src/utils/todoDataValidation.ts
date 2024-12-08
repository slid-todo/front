export const todoDataValidation = (
  title: string,
  target: string,
  date: { startDate: Date | undefined; endDate: Date | undefined },
) => {
  if (title && target && date.startDate && date.endDate) {
    return false;
  }
  return true;
};
