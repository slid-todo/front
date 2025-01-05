import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { createLike } from '@/apis/Likes/createLike';
import { CreateLikeResponse } from '@/types/Likes';
import { notify } from '@/store/useToastStore';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { QUERY_KEYS } from '@/constants/QueryKeys';

export const useCreateLike = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateLikeResponse, AxiosError, number>({
    mutationFn: (completeId: number) => createLike(completeId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLLOWS] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMPLETE_DETAIL],
      });
    },

    onError: (error) => {
      notify('error', TOAST_MESSAGES.LIKE_ERROR, 3000);
      console.error('Error creating like:', error.message);
    },
  });
};
