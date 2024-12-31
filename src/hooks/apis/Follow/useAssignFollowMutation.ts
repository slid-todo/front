import { useMutation, useQueryClient } from '@tanstack/react-query';
import { POST } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { AssignFollowResponse } from '@/types/response';
import { notify } from '@/store/useToastStore';
import { QUERY_KEYS } from '@/constants/QueryKeys';

interface FollowId {
  userId: number;
}

export const useAssignFollowMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: number) =>
      POST<AssignFollowResponse, FollowId>(
        API_ENDPOINTS.FOLLOW.ASSIGN_FOLLOW(userId),
      ),
    onSuccess: (data) => {
      notify('success', '팔로우 등록', 3000);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_PROFILE, data.data.followId],
      });
    },
    onError: (error) => {
      console.error(error.message);
      notify('error', '팔로우 등록 실패', 3000);
    },
  });
};
