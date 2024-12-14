import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { CreateTodosRequest } from '@/types/CreateTodos/CreateTodosRequest';
import axiosInstance from '@/lib/axiosInstance';

export const createTodo = async (data: CreateTodosRequest) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.TODOS.CREATE, data);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};
