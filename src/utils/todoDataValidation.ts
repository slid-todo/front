export const todoDataValidation = (
  title: string,
  goalTitle: string,
  startDate: string,
  endDate: string,
) => {
  if (title && goalTitle && startDate && endDate) {
    return false;
  }
  return true;
};
