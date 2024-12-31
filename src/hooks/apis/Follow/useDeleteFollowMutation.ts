import { useMutation, useQueryClient } from '@tanstack/react-query';
import { POST } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { DeleteFollowResponse } from '@/types/response';
import { notify } from '@/store/useToastStore';
import { QUERY_KEYS } from '@/constants/QueryKeys';

interface FollowId {
  userId: number;
}

export const useDeleteFollowMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: number) =>
      POST<DeleteFollowResponse, FollowId>(
        API_ENDPOINTS.FOLLOW.DELETE_FOLLOW(userId),
      ),
    onSuccess: (data) => {
      notify('success', '팔로우 취소', 3000);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_PROFILE, data.data.followerId],
      });
    },
    onError: (error) => {
      console.error(error.message);
      notify('error', '팔로우 취소 실패', 3000);
    },
  });
};
