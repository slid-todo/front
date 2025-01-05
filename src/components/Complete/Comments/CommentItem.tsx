'use client';

import { useState } from 'react';

import { usePutComment } from '@/hooks/apis/Comment/usePutCommentQuery';
import { useDeleteComment } from '@/hooks/apis/Comment/useDeleteCommentQuery';
import { PutCommentRequest } from '@/types/Comment';
import { CommentTypes } from '@/types/data';
import { CommentOptions } from './CommentOptions';

interface CommentItemProps {
  comment: CommentTypes;
}

export const CommentItem = ({ comment }: CommentItemProps) => {
  const putCommentMutation = usePutComment();
  const deleteCommentMutation = useDeleteComment();

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const handleSave = () => {
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

  const handleCancel = () => {
    setIsEditing(false);
    setEditedContent(comment.content);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    if (confirm('정말로 이 댓글을 삭제하시겠습니까?')) {
      deleteCommentMutation.mutate(comment.commentId);
    }
  };

  return (
    <div className="relative flex items-start justify-between rounded bg-gray-50 p-4 shadow">
      <div className="flex-1">
        <p className="font-semibold">{comment.userName}</p>
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="mt-1 w-full resize-none rounded border p-2"
            rows={3}
          />
        ) : (
          <p className="mt-1">{comment.content}</p>
        )}
        <p className="mt-1 text-xs text-gray-400">
          {new Date(comment.createdAt).toLocaleString()}
        </p>
      </div>
      <div className="ml-4">
        <CommentOptions
          isEditing={isEditing}
          onSave={handleSave}
          onCancel={handleCancel}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};
