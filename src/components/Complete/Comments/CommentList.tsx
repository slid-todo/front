'use client';

import { CommentTypes } from '@/types/data';
import { CommentItem } from './CommentItem';

interface CommentListProps {
  comments: CommentTypes[];
}

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className="mt-4 space-y-4">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem key={comment.commentId} comment={comment} />
        ))
      ) : (
        <div className="text-center text-gray-500">댓글이 없습니다.</div>
      )}
    </div>
  );
};
