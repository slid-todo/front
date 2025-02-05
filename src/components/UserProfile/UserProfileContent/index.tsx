'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUserProfileQuery } from '@/hooks/apis/Auth/useUserProfileQuery';

interface UserProfileContent {
  userId: string;
}

export const UserProfileContent = ({ userId }: UserProfileContent) => {
  const { completeResponses } = useUserProfileQuery(Number(userId));

  const router = useRouter();

  const handleClick = (completeId: number) => {
    router.push(`/completes/${completeId}`);
  };

  return (
    <div className="mt-8 grid grid-cols-3 gap-8">
      {completeResponses.map((complete) =>
        complete.completePic ? (
          <div
            key={complete.completeId}
            className="relative aspect-square w-full overflow-hidden rounded-4"
            onClick={() => handleClick(complete.completeId)}
          >
            <Image
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="rounded-4"
              src={complete.completePic}
              alt="인증한 이미지"
            />
          </div>
        ) : (
          <div
            key={complete.completeId}
            className="flex aspect-square w-full rounded-4 bg-gray-200"
          />
        ),
      )}
    </div>
  );
};
