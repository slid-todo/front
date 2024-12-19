import { COMMON_TODO_DATA } from '@/constants/Todos/CommonTodoData';

export const getCreateTodoData = ({
  title,
  startDate,
  endDate,
  todoLink,
  imageName,
  imageEncodedBase64,
  goalId,
}: typeof COMMON_TODO_DATA) => ({
  title,
  startDate,
  endDate,
  todoLink,
  imageName,
  imageEncodedBase64,
  goalId,
});

export const getModifyTodoData = ({
  title,
  startDate,
  endDate,
  todoStatus,
  todoLink,
  imageName,
  imageEncodedBase64,
}: typeof COMMON_TODO_DATA) => ({
  title,
  startDate,
  endDate,
  todoStatus,
  todoLink,
  imageName,
  imageEncodedBase64,
});
