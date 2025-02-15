import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { notify } from '@/store/useToastStore';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { deleteTodo } from '@/apis/Todo/deleteTodo';

interface DeleteMutationProps {
  todoId: string | number;
}

export const useDeleteTodo = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  DeleteMutationProps
> => {
  const queryClient = useQueryClient();

  const router = useRouter();

  return useMutation<AxiosResponse, AxiosError, DeleteMutationProps>({
    mutationFn: ({ todoId }: DeleteMutationProps) => deleteTodo(todoId),
    onSuccess: () => {
      notify('success', '삭제에 성공하였습니다', 3000);
      router.push('/todos');
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS_OF_GOALS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.RECENT_TODOS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODAY_TODO] });
    },
    onError: (error: AxiosError) => {
      notify('error', '삭제에 실패하였습니다', 3000);
      console.error('Error Delete todo:', error.message);
    },
  });
};
