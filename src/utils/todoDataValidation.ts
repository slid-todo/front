export const todoDataValidation = (
  title: string,
  goalId: number,
  startDate: string,
  endDate: string,
) => {
  if (title && goalId && startDate && endDate) {
    return false;
  }
  return true;
};
