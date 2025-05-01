import { useMutation, useQueryClient } from '@tanstack/react-query';

import { POST } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';
import { CommentResponse, GetCommentRequest } from '@/types/Comment';
import { TOAST_MESSAGES } from '@/constants/Messages';

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postData: GetCommentRequest) =>
      POST<CommentResponse, GetCommentRequest>(
        API_ENDPOINTS.COMMENT.CREATE,
        postData,
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMPLETE_DETAIL] });
      notify('success', TOAST_MESSAGES.COMMENT_CREATE_SUCCESS, 3000);
    },

    onError: (error) => {
      console.error(error.message);
      notify('error', TOAST_MESSAGES.COMMENT_CREATE_ERROR, 3000);
    },
  });
};
