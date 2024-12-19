import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';

export const deleteTodo = async (todoId: string | number) => {
  try {
    const response = await axiosInstance.delete(
      API_ENDPOINTS.TODOS.DELETE(todoId),
    );
    return response.data;
  } catch (error) {
    console.error('Error Delete todo: ', error);
    throw error;
  }
};
