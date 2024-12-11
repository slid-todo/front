import { CreateTodosRequest } from '@/types/CreateTodos/CreateTodosRequest';
import axiosInstance from '../../lib/axiosInstance';

export const createTodo = async (data: CreateTodosRequest) => {
  try {
    const response = await axiosInstance.post('/api/v1/todos', data);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};
