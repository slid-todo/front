'use client';

import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { GetCommentRequest } from '@/types/Comment';
import { useCreateComment } from '@/hooks/apis/Comment/useCreateCommentQuery';
import { QUERY_KEYS } from '@/constants/QueryKeys';

import { GetCompleteDetailResponse } from '@/types/Completes';

interface CommentInputProps {
  completeId: number;
}

export const CommentInput = ({ completeId }: CommentInputProps) => {
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

  return (
    <div className="fixed inset-x-0 bottom-0 border-t bg-white p-4 shadow">
      <div className="flex space-x-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력하세요..."
          className="flex-1 rounded border p-2"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleCreateComment();
            }
          }}
        />
        <button
          onClick={handleCreateComment}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          전송
        </button>
      </div>
    </div>
  );
};
