import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { createLike } from '@/apis/Likes/createLike';
import { CreateLikeResponse } from '@/types/Likes';
import { notify } from '@/store/useToastStore';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { GetFollowsResponse } from '@/types/Follows';
import { GetCompleteDetailResponse } from '@/types/Completes';

export const useCreateLike = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateLikeResponse, AxiosError, number>({
    mutationFn: (completeId: number) => createLike(completeId),

    onMutate: async (completeId: number) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.FOLLOWS] });
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.COMPLETE_DETAIL],
      });

      const previousFollows = queryClient.getQueryData<GetFollowsResponse>([
        QUERY_KEYS.FOLLOWS,
      ]);

      const previousCompleteDetail =
        queryClient.getQueryData<GetCompleteDetailResponse>([
          QUERY_KEYS.COMPLETE_DETAIL,
        ]);

      if (previousFollows) {
        const newFollows = structuredClone(previousFollows);

        const targetPost = newFollows.data.content.find(
          (item) => item.completeId === completeId,
        );
        if (targetPost) {
          targetPost.likeStatus = true;
          targetPost.likeCount = targetPost.likeCount + 1;
        }

        queryClient.setQueryData([QUERY_KEYS.FOLLOWS], newFollows);
      }

      if (
        previousCompleteDetail &&
        previousCompleteDetail.data.completeId === completeId
      ) {
        const newCompleteDetail = structuredClone(previousCompleteDetail);

        newCompleteDetail.data.likeStatus = true;
        newCompleteDetail.data.likeCount += 1;

        queryClient.setQueryData(
          [QUERY_KEYS.COMPLETE_DETAIL],
          newCompleteDetail,
        );
      }

      return { previousFollows, previousCompleteDetail };
    },
    onError: (error) => {
      notify('error', TOAST_MESSAGES.LIKE_ERROR, 3000);
      console.error('Error creating like:', error.message);
    },
  });
};
