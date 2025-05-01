import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DELETE } from '@/apis/services/httpMethod';
import { DeleteLikeResponse } from '@/types/Likes';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { notify } from '@/store/useToastStore';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { QUERY_KEYS } from '@/constants/QueryKeys';

export const useDeleteLike = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteLikeResponse, Error, number>({
    mutationFn: (completeId: number) =>
      DELETE<DeleteLikeResponse>(API_ENDPOINTS.LIKE.DELETE(completeId)),

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
