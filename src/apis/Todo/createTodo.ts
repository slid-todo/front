import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import axiosInstance from '@/lib/axiosInstance';
import { CreateTodosRequest } from '@/types/Todos/CreateTodos/CreateTodosRequest';

export const createTodo = async (data: CreateTodosRequest) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.TODOS.CREATE, data);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};
