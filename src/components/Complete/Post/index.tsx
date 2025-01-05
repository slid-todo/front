'use client';

import { useRouter } from 'next/navigation';
import { FollowsSkeleton } from '@/components/Skeletons/FollowsSkeleton';
import { useGetCompleteDetailQuery } from '@/hooks/apis/Complete/useGetCompleteDetailQuery';
import { PostContent } from '@/components/Follows/Post/PostContent';
import { PostImage } from '@/components/Follows/Post/PostImage';
import { PostLike } from '@/components/Follows/Post/PostLike';
import { PostProfile } from '@/components/Follows/Post/PostProfile';
import { PostGoalAndTodo } from './PostGoalAndTodo';

interface CompletePostProps {
  completeId: number;
}

export const CompletePost = (props: CompletePostProps) => {
  const { completeId } = props;

  const router = useRouter();

  const { complete, isLoading, isError } =
    useGetCompleteDetailQuery(completeId);

  if (isError) {
    router.push('/500');

    return null;
  }

  return (
    <div>
      {isLoading ? (
        <FollowsSkeleton />
      ) : complete ? (
        <div className="w-screen flex-col">
          <div className="mr-16 flex justify-between">
            <PostProfile
              createdAt={complete.createdAt}
              username={complete.userName}
              profilePic={complete.profilePic}
              userId={complete.userId}
            />
            <PostLike
              likeStatus={complete.likeStatus}
              likeCount={complete.likeCount}
              completeId={complete.completeId}
            />
          </div>

          <PostImage
            completePic={complete.completePic}
            completeId={complete.completeId}
          />

          <PostContent text={complete.note} completeId={complete.completeId} />

          <div className="flex justify-between gap-8 px-16 pt-8">
            <PostGoalAndTodo>{complete.goalName}</PostGoalAndTodo>
            <PostGoalAndTodo>{complete.todoName}</PostGoalAndTodo>
          </div>
        </div>
      ) : (
        <div>게시글이 없습니다.</div>
      )}
    </div>
  );
};
