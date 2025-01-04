'use client';

import { useRouter } from 'next/navigation';
import { useGetFollowPosts } from '@/hooks/apis/Follows/useGetFollowPostsQuery';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { FollowsSkeleton } from '../Skeletons/FollowsSkeleton';
import { Spinner } from '../common/Spinner';
import { Post } from './Post';

export const FollowsContainer = () => {
  const router = useRouter();

  const { follows, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useGetFollowPosts();

  const { observerRef } = useInfiniteScroll({ fetchNextPage, isLoading });

  if (isError) {
    router.push('/500');

    return null;
  }

  return (
    <div className="mt-48">
      <div className="fixed h-44 w-full bg-white px-16 py-8 text-xl-semibold text-custom-gray-300">
        팔로워
      </div>
      <div className="mb-8 h-48" />
      {isLoading ? (
        <FollowsSkeleton />
      ) : follows.length > 0 ? (
        <div>
          {follows.map((post) => (
            <Post key={post.completeId} post={post} />
          ))}
          {isFetchingNextPage && (
            <span className="flex w-full justify-center">
              <Spinner className="size-18" />
            </span>
          )}
          <div ref={observerRef} style={{ height: '1px' }} />
        </div>
      ) : (
        <div>게시글이 없습니다.</div>
      )}
    </div>
  );
};
