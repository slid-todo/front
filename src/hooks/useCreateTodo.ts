import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { createTodo } from '@/apis/Todo/createTodo';
import { CreateTodosRequest } from '@/types/CreateTodos/CreateTodosRequest';
import { CreateTodoResponse } from '@/types/CreateTodos/CreateTodosResponse';
import { notify } from '@/store/useToastStore';

export const useCreateTodo = (): UseMutationResult<
  CreateTodoResponse,
  AxiosError,
  CreateTodosRequest
> => {
  return useMutation<CreateTodoResponse, AxiosError, CreateTodosRequest>({
    mutationFn: (data) => createTodo(data),
    onSuccess: () => {
      notify('success', '할 일 등록에 성공하였습니다', 2000);
    },
    onError: (error: AxiosError) => {
      notify('error', '할 일 등록에 실패하였습니다', 2000);
      console.error('Error creating todo:', error.message);
    },
  });
};
