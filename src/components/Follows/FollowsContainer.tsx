'use client';

import router from 'next/router';
import { useGetFollowPosts } from '@/hooks/apis/Follows/useGetFollowPostsQuery';
import { FollowsSkeleton } from '../Skeletons/FollowsSkeleton';
import { Post } from './Post';

export const FollowsContainer = () => {
  const { follows, isLoading, isError } = useGetFollowPosts();

  if (isError) {
    router.push('/500');

    return null;
  }

  return (
    <div className="mt-48 overflow-y-hidden">
      <div className="fixed h-44 w-full bg-white px-16 py-8 text-xl-semibold text-custom-gray-300">
        팔로워
      </div>
      <div className="mb-8 h-48" />
      {isLoading ? (
        <FollowsSkeleton />
      ) : follows && follows.length > 0 ? (
        follows.map((post) => <Post key={post.completeId} post={post} />)
      ) : (
        <div>게시글이 없습니다.</div>
      )}
    </div>
  );
};
