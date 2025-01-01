'use client';

import { useGetFollowPosts } from '@/hooks/apis/Follows/useGetFollowPostsQuery';
import { Post } from './Post';

export const FollowsContainer = () => {
  const { follows, isLoading, isError, error } = useGetFollowPosts();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다: {error?.message}</div>;
  }

  return (
    <div className="mt-48">
      <h1>팔로우한 게시글 목록</h1>
      {follows && follows.length > 0 ? (
        follows.map((post) => <Post key={post.completeId} post={post} />)
      ) : (
        <div>게시글이 없습니다.</div>
      )}
    </div>
  );
};
