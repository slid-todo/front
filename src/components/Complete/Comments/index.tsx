'use client';

import { useRouter } from 'next/navigation';
import { FollowsSkeleton } from '@/components/Skeletons/FollowsSkeleton';
import { useGetCompleteDetailQuery } from '@/hooks/apis/Complete/useGetCompleteDetailQuery';
import { CommentList } from './CommentList';
import { CommentInput } from './CommentInput';

interface CompleteCommentsProps {
  completeId: number;
}

export const CompleteComments = ({ completeId }: CompleteCommentsProps) => {
  const router = useRouter();
  const { complete, isLoading, isError } =
    useGetCompleteDetailQuery(completeId);

  if (isError) {
    router.push('/500');
    return null;
  }

  return (
    <div className="relative pb-20">
      {isLoading ? (
        <FollowsSkeleton />
      ) : complete ? (
        <div className="mx-auto w-full max-w-3xl flex-col px-4">
          <span className="mx-8 text-sm-medium text-custom-gray-100">
            댓글 ({complete.commentCount})
          </span>
          <CommentList comments={complete.comments} />
        </div>
      ) : (
        <div className="text-center text-gray-500">게시글이 없습니다.</div>
      )}
      {/* 고정된 댓글 입력 칸 */}
      <CommentInput completeId={completeId} />
    </div>
  );
};
