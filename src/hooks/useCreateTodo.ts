import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { createTodo } from '@/apis/createTodo';
import { CreateTodosRequest } from '@/types/CreateTodos/CreateTodosRequest';
import { CreateTodoResponse } from '@/types/CreateTodos/CreateTodosResponse';

export const useCreateTodo = (): UseMutationResult<
  CreateTodoResponse,
  AxiosError,
  CreateTodosRequest
> => {
  return useMutation<CreateTodoResponse, AxiosError, CreateTodosRequest>({
    mutationFn: (data) => createTodo(data),
    onSuccess: (data) => {
      console.log('Todo successfully created:', data);
    },
    onError: (error: AxiosError) => {
      console.error('Error creating todo:', error.message);
    },
  });
};
