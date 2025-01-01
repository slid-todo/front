import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { notify } from '@/store/useToastStore';
import { createFollows } from '@/apis/Follows/createFollows';
import { CreateFollowsResponse } from '@/types/Follows';

export const useCreateFollows = (): UseMutationResult<
  CreateFollowsResponse,
  AxiosError,
  number
> => {
  return useMutation<CreateFollowsResponse, AxiosError, number>({
    mutationFn: (followerId: number) => createFollows(followerId),

    onSuccess: () => {
      notify('success', '팔로우가 추가되었습니다.', 3000);
    },

    onError: (error: AxiosError) => {
      notify('error', '등록에 실패하였습니다', 3000);
      console.error('Error creating todo:', error.message);
    },
  });
};
