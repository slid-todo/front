'use client';

import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { FaArrowUp } from 'react-icons/fa6';
import { GetCommentRequest } from '@/types/Comment';
import { useCreateComment } from '@/hooks/apis/Comment/useCreateCommentQuery';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { GetCompleteDetailResponse } from '@/types/Completes';
import { cn } from '@/utils/className';

interface CommentInputProps {
  completeId: number;
}

export const CommentInput = (props: CommentInputProps) => {
  const { completeId } = props;

  const [newComment, setNewComment] = useState('');
  const createCommentMutation = useCreateComment();
  const queryClient = useQueryClient();

  const handleCreateComment = () => {
    if (newComment.trim() === '') return;

    const postData: GetCommentRequest = {
      completeId,
      content: newComment.trim(),
    };

    createCommentMutation.mutate(postData, {
      onSuccess: () => {
        setNewComment('');
        queryClient.setQueryData(
          [QUERY_KEYS.COMPLETE_DETAIL, completeId],
          (oldData: GetCompleteDetailResponse) => {
            if (!oldData) return oldData;
            return {
              ...oldData,
              data: {
                ...oldData.data,
                commentCount: oldData.data.commentCount + 1,
                comments: [
                  {
                    commentId: oldData.data.commentCount + 1,
                    userId: oldData.data.userId,
                    userName: oldData.data.userName,
                    content: newComment.trim(),
                    createdAt: new Date().toISOString(),
                  },
                  ...oldData.data.comments,
                ],
              },
            };
          },
        );
      },
      onError: () => {},
    });
  };

  const hasText = newComment.trim().length > 0;

  const buttonColorClasses = hasText
    ? 'bg-custom-gray-100'
    : 'bg-custom-white-300 hover:bg-custom-white-400 cursor-not-allowed';

  const iconColorClasses = hasText
    ? 'text-white'
    : 'text-custom-gray-100 cursor-not-allowed';

  return (
    <div className="inset-x-0 bottom-0 h-76 gap-10 px-16 py-12 shadow">
      <div className="relative flex items-center justify-center">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력해주세요"
          className="h-52 w-full rounded-100 border border-transparent bg-white p-16 pr-50 outline-none transition-colors duration-300"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey && hasText) {
              e.preventDefault();
              handleCreateComment();
            }
          }}
        />
        <button
          onClick={handleCreateComment}
          disabled={!hasText}
          className={cn(
            'absolute right-12 top-12 flex size-28 items-center justify-center rounded-full transition',
            buttonColorClasses,
          )}
          aria-label="댓글 작성"
        >
          <FaArrowUp className={cn(iconColorClasses)} />
        </button>
      </div>
    </div>
  );
};
