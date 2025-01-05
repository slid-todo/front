'use client';

import { CommentTypes } from '@/types/data';
import { CommentItem } from './CommentItem';

interface CommentListProps {
  comments: CommentTypes[];
}

export const CommentList = (props: CommentListProps) => {
  const { comments } = props;

  return (
    <div className="mb-76 mt-4 space-y-4">
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
