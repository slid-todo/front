'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUserProfileQuery } from '@/hooks/apis/Auth/useUserProfileQuery';
import { Spinner } from '@/components/common/Spinner';

interface UserProfileContent {
  userId: string;
}

export const UserProfileContent = ({ userId }: UserProfileContent) => {
  const { completeResponses, isLoading } = useUserProfileQuery(Number(userId));

  const router = useRouter();

  const handleClick = (completeId: number) => {
    router.push(`/completes/${completeId}`);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner className="size-28" />
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-3 gap-8">
      {completeResponses.map((complete) =>
        complete.completePic ? (
          <Image
            key={complete.completeId}
            width={48}
            height={48}
            className="flex h-109 w-full rounded-4"
            priority
            src={complete.completePic}
            alt="인증한 이미지"
            onClick={() => handleClick(complete.completeId)}
          />
        ) : (
          <div
            key={complete.completeId}
            className="flex h-109 w-full rounded-4 bg-gray-200"
          />
        ),
      )}
    </div>
  );
};
