import React from 'react';
import { ContentTypes } from '@/types/data';
import { PostProfile } from './PostProfile';
import { PostImage } from './PostImage';
import { PostLike } from './PostLike';
import { PostComments } from './PostComments';
import { PostContent } from './PostContent';

interface PostProps {
  post: ContentTypes;
}

export function Post({ post }: PostProps) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '8px',
        marginBottom: '8px',
        borderRadius: '4px',
      }}
    >
      {/* 1) 프로필 정보 */}
      <PostProfile createdAt={post.createdAt} userName="홍길동" />

      {/* 2) 이미지 */}
      <PostImage completePic={post.completePic} />

      {/* 3) 좋아요 */}
      <PostLike likeStatus={post.likeStatus} likeCount={post.likeCount} />

      {/* 4) 댓글 */}
      <PostComments commentCount={post.commentCount} />

      {/* 5) 본문 내용 */}
      <PostContent text="이 글의 본문 내용입니다. (추후 데이터 연동 예정)" />
    </div>
  );
}
