// components/Comments/CommentItem.tsx
'use client';

import { useState } from 'react';
import { usePutComment } from '@/hooks/apis/Comment/usePutCommentQuery';
import { useDeleteComment } from '@/hooks/apis/Comment/useDeleteCommentQuery';
import { PutCommentRequest } from '@/types/Comment';
import { CommentTypes } from '@/types/data';

interface CommentItemProps {
  comment: CommentTypes;
}

export const CommentItem = ({ comment }: CommentItemProps) => {
  const putCommentMutation = usePutComment();
  const deleteCommentMutation = useDeleteComment();

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const handleUpdateComment = () => {
    if (editedContent.trim() === '') return;

    const putData: PutCommentRequest = {
      content: editedContent.trim(),
    };

    putCommentMutation.mutate(
      { data: putData, commentId: comment.commentId },
      {
        onSuccess: () => {
          setIsEditing(false);
        },
      },
    );
  };

  const handleDeleteComment = () => {
    if (confirm('정말로 이 댓글을 삭제하시겠습니까?')) {
      deleteCommentMutation.mutate(comment.commentId);
    }
  };

  return (
    <div className="flex items-start justify-between rounded bg-gray-50 p-4 shadow">
      <div className="flex-1">
        <p className="font-semibold">{comment.userName}</p>
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="mt-1 w-full rounded border p-2"
            rows={3}
          />
        ) : (
          <p className="mt-1">{comment.content}</p>
        )}
        <p className="mt-1 text-xs text-gray-400">
          {new Date(comment.createAt).toLocaleString()}
        </p>
      </div>
      <div className="ml-4 flex flex-col space-y-2">
        {isEditing ? (
          <>
            <button
              onClick={handleUpdateComment}
              className="text-sm text-blue-500"
            >
              저장
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedContent(comment.content);
              }}
              className="text-sm text-gray-500"
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm text-yellow-500"
            >
              수정
            </button>
            <button
              onClick={handleDeleteComment}
              className="text-sm text-red-500"
            >
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  );
};
