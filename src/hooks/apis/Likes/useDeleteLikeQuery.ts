import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DELETE } from '@/apis/services/httpMethod';
import { DeleteLikeResponse } from '@/types/Likes';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { notify } from '@/store/useToastStore';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { GetFollowsResponse } from '@/types/Follows';
import { GetCompleteDetailResponse } from '@/types/Completes';

export const useDeleteLike = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteLikeResponse, Error, number>({
    mutationFn: (completeId: number) =>
      DELETE<DeleteLikeResponse>(API_ENDPOINTS.LIKE.DELETE(completeId)),

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
          targetPost.likeStatus = false;
          targetPost.likeCount = Math.max(targetPost.likeCount - 1, 0);
        }
        queryClient.setQueryData([QUERY_KEYS.FOLLOWS], newFollows);
      }

      if (previousCompleteDetail) {
        const newCompleteDetail = structuredClone(previousCompleteDetail);

        if (newCompleteDetail.data.completeId === completeId) {
          newCompleteDetail.data.likeStatus = false;
          newCompleteDetail.data.likeCount = Math.max(
            newCompleteDetail.data.likeCount - 1,
            0,
          );

          queryClient.setQueryData(
            [QUERY_KEYS.COMPLETE_DETAIL],
            newCompleteDetail,
          );
        }
      }

      return { previousFollows, previousCompleteDetail };
    },
    onError: (error) => {
      notify('error', TOAST_MESSAGES.LIKE_ERROR, 3000);
      console.error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLLOWS] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMPLETE_DETAIL],
      });
    },
  });
};
