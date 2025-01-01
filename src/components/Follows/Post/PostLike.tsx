import React from 'react';

interface PostLikeProps {
  likeStatus: boolean;
  likeCount: number;
}

export function PostLike({ likeStatus, likeCount }: PostLikeProps) {
  return (
    <div style={{ marginBottom: '8px' }}>
      {likeStatus ? (
        <span style={{ color: 'red', marginRight: '8px' }}>♥</span>
      ) : (
        <span style={{ marginRight: '8px' }}>♡</span>
      )}
      <span>{likeCount}</span>
    </div>
  );
}
