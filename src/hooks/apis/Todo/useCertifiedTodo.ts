import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { certifiedTodo } from '@/apis/Todo/certifiedTodo';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';
import { useTodoModalStore } from '@/store/useTodoModalStore';

export interface CertifiedTodoRequest {
  completePicBase64: string;
  completePicName: string;
  note: string;
  completeLink: string;
}

interface CertifiedTodoProps {
  completeId: number;
  data: CertifiedTodoRequest;
}

export const useCertifiedTodo = (): UseMutationResult<
  AxiosResponse,
  AxiosError,
  CertifiedTodoProps
> => {
  const queryClient = useQueryClient();
  const { close } = useTodoModalStore();

  return useMutation<AxiosResponse, AxiosError, CertifiedTodoProps>({
    mutationFn: ({ completeId, data }: CertifiedTodoProps) =>
      certifiedTodo(completeId, data),
    onSuccess: () => {
      notify('success', TOAST_MESSAGES.CERTIFIED_SUCCESS, 3000);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CERTIFIED_TODO] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CERTIFIED_RECENT_TODO],
      });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODAY_TODO] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS_OF_GOALS] });
      close();
    },
    onError: (error: AxiosError) => {
      notify('error', TOAST_MESSAGES.CERTIFIED_ERROR, 3000);
      console.error('Error creating todo:', error.message);
    },
  });
};
