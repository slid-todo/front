// hooks/useDeleteFollow.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notify } from '@/store/useToastStore';
import { DeleteFollowsResponse } from '@/types/Follows';
import { DELETE } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';

export const useDeleteFollow = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (followerId: number) =>
      DELETE<DeleteFollowsResponse>(API_ENDPOINTS.FOLLOW.DELETE(followerId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLLOW_COUNT] });
      notify('success', '팔로우 취소가 완료되었습니다.', 3000);
    },
    onError: (error) => {
      console.error(error.message);
      notify('error', '팔로우 취소에 실패하였습니다.', 3000);
    },
  });
};
