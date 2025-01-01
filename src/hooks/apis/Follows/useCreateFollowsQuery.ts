import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { notify } from '@/store/useToastStore';
import { createFollows } from '@/apis/Follows/createFollows';
import { CreateFollowsResponse } from '@/types/Follows';
import { TOAST_MESSAGES } from '@/constants/Messages';

export const useCreateFollows = (): UseMutationResult<
  CreateFollowsResponse,
  AxiosError,
  number
> => {
  return useMutation<CreateFollowsResponse, AxiosError, number>({
    mutationFn: (followerId: number) => createFollows(followerId),

    onSuccess: () => {
      notify('success', TOAST_MESSAGES.CREATE_FOLLOW_SUCCESS, 3000);
    },

    onError: (error: AxiosError) => {
      notify('error', TOAST_MESSAGES.CREATE_FOLLOW_ERROR, 3000);
      console.error('Error creating todo:', error.message);
    },
  });
};
