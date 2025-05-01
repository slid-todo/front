import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notify } from '@/store/useToastStore';
import { DeleteFollowsResponse } from '@/types/Follows';
import { DELETE } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { TOAST_MESSAGES } from '@/constants/Messages';

export const useDeleteFollow = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (followerId: number) =>
      DELETE<DeleteFollowsResponse>(API_ENDPOINTS.FOLLOW.DELETE(followerId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLLOW_COUNT] });
      notify('success', TOAST_MESSAGES.DELETE_FOLLOW_SUCCESS, 3000);
    },
    onError: (error) => {
      console.error(error.message);
      notify('error', TOAST_MESSAGES.DELETE_FOLLOW_ERROR, 3000);
    },
  });
};
