import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { createTodo } from '@/apis/Todo/createTodo';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { useSidebarStore } from '@/store/useSidebarStore';
import { notify } from '@/store/useToastStore';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { useTodoModalStore } from '@/store/useTodoModalStore';
import { CreateTodosRequest } from '@/types/Todos/CreateTodos/CreateTodosRequest';

export const useCreateTodo = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  CreateTodosRequest
> => {
  const queryClient = useQueryClient();
  const { close } = useTodoModalStore();
  const { resetAll } = useTodoDataStore();
  const { close: closeSidebar } = useSidebarStore();

  return useMutation<AxiosResponse, AxiosError, CreateTodosRequest>({
    mutationFn: (data) => createTodo(data),
    onSuccess: () => {
      notify('success', '등록에 성공하였습니다', 3000);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS_OF_GOALS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.RECENT_TODOS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODAY_TODO] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ALL_GOALS] });
      resetAll();
      close();
      closeSidebar();
    },
    onError: (error: AxiosError) => {
      notify('error', '등록에 실패하였습니다', 3000);
      console.error('Error creating todo:', error.message);
    },
  });
};
