import { useMutation, useQueryClient } from '@tanstack/react-query';

import { API } from '@/apis/services/httpMethod';
import { API_ENDPOINTS } from '@/constants/ApiEndpoints';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { notify } from '@/store/useToastStore';
import { CommentResponse, PutCommentRequest } from '@/types/Comment';

interface PutCommentVariables {
  data: PutCommentRequest;
  commentId: number;
}

export const usePutComment = () => {
  const queryClient = useQueryClient();

  return useMutation<CommentResponse, Error, PutCommentVariables>({
    mutationFn: ({ data, commentId }) =>
      API.put<CommentResponse, PutCommentRequest>(
        API_ENDPOINTS.COMMENT.PUT(commentId),
        data,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMPLETE_DETAIL] });
      notify('success', TOAST_MESSAGES.COMMENT_PUT_SUCCESS, 3000);
    },
    onError: () => {
      notify('error', TOAST_MESSAGES.COMMENT_PUT_ERROR, 3000);
    },
  });
};
