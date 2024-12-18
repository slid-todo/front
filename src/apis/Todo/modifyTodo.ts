import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { ModifyTodosRequest } from '@/types/Todos/ModifyTodos/ModifyTodosRequest';
import axiosInstance from '@/lib/axiosInstance';

export const modifyTodo = async (
  todoId: string | number,
  data: ModifyTodosRequest,
) => {
  try {
    const response = await axiosInstance.put(
      API_ENDPOINTS.TODOS.PUT(todoId),
      data,
    );
    return response.data;
  } catch (error) {
    console.error('Error modifying todo: ', error);
    throw error;
  }
};
