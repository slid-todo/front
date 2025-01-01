import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { notify } from '@/store/useToastStore';
import { createLike } from '@/apis/Likes/createLike';
import { CreateLikeResponse } from '@/types/Likes';
import { TOAST_MESSAGES } from '@/constants/Messages';

export const useCreateLike = (): UseMutationResult<
  CreateLikeResponse,
  AxiosError,
  number
> => {
  return useMutation<CreateLikeResponse, AxiosError, number>({
    mutationFn: (completeId: number) => createLike(completeId),

    onError: (error: AxiosError) => {
      notify('error', TOAST_MESSAGES.LIKE_ERROR, 3000);
      console.error('Error creating todo:', error.message);
    },
  });
};
