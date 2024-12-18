import { COMMON_TODO_DATA } from '@/constants/Todos/CommonTodoData';

export const getCreateTodoData = (todoData: typeof COMMON_TODO_DATA) => {
  const {
    title,
    startDate,
    endDate,
    todoLink,
    imageName,
    imageEncodedBase64,
    goalId,
  } = todoData;
  return {
    title,
    startDate,
    endDate,
    todoLink,
    imageName,
    imageEncodedBase64,
    goalId,
  };
};

export const getModifyTodoData = (todoData: typeof COMMON_TODO_DATA) => {
  const {
    title,
    startDate,
    endDate,
    todoStatus,
    todoLink,
    imageName,
    imageEncodedBase64,
  } = todoData;
  return {
    title,
    startDate,
    endDate,
    todoLink,
    todoStatus,
    imageName,
    imageEncodedBase64,
  };
};
