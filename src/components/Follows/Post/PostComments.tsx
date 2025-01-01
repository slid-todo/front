import React from 'react';

interface PostCommentsProps {
  commentCount: number;
}

export function PostComments({ commentCount }: PostCommentsProps) {
  return <div style={{ marginBottom: '8px' }}>댓글 수: {commentCount}</div>;
}
