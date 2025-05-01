import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notify } from '@/store/useToastStore';
import { DELETE } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { CommentResponse } from '@/types/Comment';

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) =>
      DELETE<CommentResponse>(API_ENDPOINTS.COMMENT.DELETE(commentId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMPLETE_DETAIL] });
      notify('success', TOAST_MESSAGES.COMMENT_DELETE_SUCCESS, 3000);
    },
    onError: (error) => {
      console.error(error.message);
      notify('error', TOAST_MESSAGES.COMMENT_DELETE_ERROR, 3000);
    },
  });
};
