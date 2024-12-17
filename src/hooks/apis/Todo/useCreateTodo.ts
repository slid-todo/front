import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { createTodo } from '@/apis/Todo/createTodo';
import { CreateTodosRequest } from '@/types/CreateTodos/CreateTodosRequest';
import { CreateTodoResponse } from '@/types/CreateTodos/CreateTodosResponse';
import { notify } from '@/store/useToastStore';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { useTodoModalStore } from '@/store/useTodoModalStore';
import { useTodoDataStore } from '@/store/useTodoDataStore';

export const useCreateTodo = (): UseMutationResult<
  CreateTodoResponse,
  AxiosError,
  CreateTodosRequest
> => {
  const queryClient = useQueryClient();
  const { close } = useTodoModalStore();
  const { resetAll } = useTodoDataStore();

  return useMutation<CreateTodoResponse, AxiosError, CreateTodosRequest>({
    mutationFn: (data) => createTodo(data),
    onSuccess: () => {
      notify('success', '등록에 성공하였습니다', 3000);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS_OF_GOALS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.RECENT_TODOS] });
      resetAll();
      close();
    },
    onError: (error: AxiosError) => {
      notify('error', '등록에 실패하였습니다', 3000);
      console.error('Error creating todo:', error.message);
    },
  });
};
