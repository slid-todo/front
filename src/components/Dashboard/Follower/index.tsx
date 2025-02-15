'use client';

import { Card } from '@/components/common/Card';
import { Spinner } from '@/components/common/Spinner';
import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { FollowStorySkeleton } from '@/components/Skeletons/FollowStorySkeleton';
import { useGetFollowPosts } from '@/hooks/apis/Follows/useGetFollowPostsQuery';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { FollowerStory } from './FollowerStory';

export const Follower = () => {
  const { follows, isLoading, fetchNextPage, isFetchingNextPage } =
    useGetFollowPosts();
  const { observerRef } = useInfiniteScroll({ fetchNextPage, isLoading });

  const hasFollowers = follows.length > 0;

  return (
    <DashboardItemContainer
      title="팔로워 현황"
      className="relative mb-22 mt-16"
    >
      {isLoading && <FollowStorySkeleton />}

      {!isLoading && !hasFollowers && (
        <Card>
          <p className="text-sm-normal text-custom-gray-100">
            찍찍이들 팔로우 하고 인증 보기
          </p>
        </Card>
      )}

      {!isLoading && hasFollowers && (
        <div className="flex snap-x snap-mandatory items-center gap-8  overflow-x-scroll scrollbar-hide">
          {follows.map((follower, index) => (
            <FollowerStory
              key={follower.completeId}
              follower={follower}
              priority={index < 4}
            />
          ))}
          {isFetchingNextPage && (
            <span className="flex w-full justify-center">
              <Spinner className="size-18" />
            </span>
          )}
          <div ref={observerRef} style={{ width: '1px' }} />
        </div>
      )}
      <div className="absolute -bottom-22 -left-16 h-6 w-[calc(100%+32px)] bg-custom-white-200" />
    </DashboardItemContainer>
  );
};
