'use client';

import { useRouter } from 'next/navigation';
import { FaPersonCircleXmark } from 'react-icons/fa6';
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
    <PageContainer className="!px-0 !pt-0">
      <div className="relative pt-48 md:pt-0">
        <h1 className="sticky right-0 top-48 h-44 w-full bg-custom-white-100 px-16 py-8 text-xl-semibold text-custom-gray-300 md:top-0">
          팔로워
        </h1>
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
          <div className="flex-center h-screen flex-col gap-30 overflow-hidden">
            <FaPersonCircleXmark className="mb-4 size-150 text-gray-400" />
            <div className="text-center">팔로워 게시글이 없습니다.</div>
          </div>
        )}
      </div>
    </PageContainer>
  );
};
