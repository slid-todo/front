import { useMutation, useQueryClient } from '@tanstack/react-query';

import { API } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';
import { DeleteLikeResponse } from '@/types/Likes';

export const useDeleteLike = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteLikeResponse, Error, number>({
    mutationFn: (completeId: number) =>
      API.delete<DeleteLikeResponse>(API_ENDPOINTS.LIKE.DELETE(completeId)),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLLOWS] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMPLETE_DETAIL],
      });
    },
    onError: (error) => {
      notify('error', TOAST_MESSAGES.LIKE_ERROR, 3000);
      console.error(error.message);
    },
  });
};
