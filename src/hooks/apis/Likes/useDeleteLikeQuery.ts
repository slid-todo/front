import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notify } from '@/store/useToastStore';
import { DELETE } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { DeleteLikeResponse } from '@/types/Likes';
import { TOAST_MESSAGES } from '@/constants/Messages';

export const useDeleteLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (completeId: number) =>
      DELETE<DeleteLikeResponse>(API_ENDPOINTS.LIKE.DELETE(completeId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLLOWS] });
    },
    onError: (error) => {
      console.error(error.message);
      notify('error', TOAST_MESSAGES.LIKE_ERROR, 3000);
    },
  });
};
