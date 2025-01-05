'use client';

import { useState } from 'react';

import { usePutComment } from '@/hooks/apis/Comment/usePutCommentQuery';
import { useDeleteComment } from '@/hooks/apis/Comment/useDeleteCommentQuery';
import { PutCommentRequest } from '@/types/Comment';
import { CommentTypes } from '@/types/data';
import { PostProfile } from '@/components/Follows/Post/PostProfile';
import { CommentOptions } from './CommentOptions';

interface CommentItemProps {
  comment: CommentTypes;
}

export const CommentItem = (props: CommentItemProps) => {
  const { comment } = props;

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
    <div className="relative my-12 bg-gray-50 px-16 py-20 shadow">
      <div className="">
        <div className="-ml-12 flex items-start justify-between rounded">
          <PostProfile
            createdAt={comment.createdAt}
            username={comment.userName}
            profilePic={comment.profileImage}
            userId={2} //userId 또 받아야댐 ㅠ
          />
          <div className="mt-10">
            <CommentOptions
              isEditing={isEditing}
              onSave={handleSave}
              onCancel={handleCancel}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="mt-6 w-full resize-none rounded p-10 text-sm-normal outline-none"
            rows={3}
          />
        ) : (
          <p className="text-sm-normal text-custom-gray-300">
            {comment.content}
          </p>
        )}
      </div>
    </div>
  );
};
