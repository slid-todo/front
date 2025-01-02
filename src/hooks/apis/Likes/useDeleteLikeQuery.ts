import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DELETE } from '@/apis/services/httpMethod';
import { DeleteLikeResponse } from '@/types/Likes';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { notify } from '@/store/useToastStore';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { GetFollowsResponse } from '@/types/Follows';

export const useDeleteLike = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteLikeResponse, Error, number>({
    mutationFn: (completeId: number) =>
      DELETE<DeleteLikeResponse>(API_ENDPOINTS.LIKE.DELETE(completeId)),

    onMutate: async (completeId: number) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.FOLLOWS] });

      const previousFollows = queryClient.getQueryData<GetFollowsResponse>([
        QUERY_KEYS.FOLLOWS,
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
      return { previousFollows };
    },
    onError: (error) => {
      notify('error', TOAST_MESSAGES.LIKE_ERROR, 3000);
      console.error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLLOWS] });
    },
  });
};
