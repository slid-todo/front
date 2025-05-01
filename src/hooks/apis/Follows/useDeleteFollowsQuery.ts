import { useMutation, useQueryClient } from '@tanstack/react-query';

import { API } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';
import { DeleteFollowsResponse } from '@/types/Follows';

export const useDeleteFollow = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (followerId: number) =>
      API.delete<DeleteFollowsResponse>(
        API_ENDPOINTS.FOLLOW.DELETE(followerId),
      ),
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
