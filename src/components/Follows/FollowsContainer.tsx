'use client';

import { useRouter } from 'next/navigation';
import { useGetFollowPosts } from '@/hooks/apis/Follows/useGetFollowPostsQuery';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { FollowsSkeleton } from '../Skeletons/FollowsSkeleton';
import { PageContainer } from '../common/PageContainer';
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
    <PageContainer className="!px-0">
      <div>
        <h1 className="fixed h-44 px-16 py-8 text-xl-semibold text-custom-gray-300">
          팔로워
        </h1>
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
    </PageContainer>
  );
};
