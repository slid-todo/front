'use client';

import { useRouter } from 'next/navigation';

import { useGetCompleteDetailQuery } from '@/hooks/apis/Complete/useGetCompleteDetailQuery';

import { Spinner } from '@/components/common/Spinner';
import { CommentInput } from './CommentInput';
import { CommentList } from './CommentList';

interface CompleteCommentsProps {
  completeId: number;
}

export const CompleteComments = (props: CompleteCommentsProps) => {
  const { completeId } = props;

  const router = useRouter();
  const { complete, isLoading, isError } =
    useGetCompleteDetailQuery(completeId);

  if (isError) {
    router.push('/500');
    return null;
  }

  return (
    <div className="relative">
      {isLoading ? (
        <span className="flex-center">
          <Spinner className="size-18" />
        </span>
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
      <CommentInput completeId={completeId} />
    </div>
  );
};
