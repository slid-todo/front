import { useMutation, useQueryClient } from '@tanstack/react-query';

import { API } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';
import { CommentResponse, GetCommentRequest } from '@/types/Comment';

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postData: GetCommentRequest) =>
      API.post<CommentResponse, GetCommentRequest>(
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
