import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { notify } from '@/store/useToastStore';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { useTodoModalStore } from '@/store/useTodoModalStore';
import { modifyTodo } from '@/apis/Todo/modifyTodo';
import { ModifyTodosRequest } from '@/types/Todos/ModifyTodos/ModifyTodosRequest';

interface ModifyMutationProps {
  todoId: string | number;
  data: ModifyTodosRequest;
}

export const useModifyTodo = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  ModifyMutationProps
> => {
  const queryClient = useQueryClient();
  const { close } = useTodoModalStore();

  return useMutation<AxiosResponse, AxiosError, ModifyMutationProps>({
    mutationFn: ({ todoId, data }: ModifyMutationProps) =>
      modifyTodo(todoId, data),
    onSuccess: () => {
      notify('success', '수정에 성공하였습니다', 3000);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS_OF_GOALS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.RECENT_TODOS] });
      close();
    },
    onError: (error: AxiosError) => {
      notify('error', '수정에 실패하였습니다', 3000);
      console.error('Error creating todo:', error.message);
    },
  });
};
