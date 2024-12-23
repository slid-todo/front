import Image from 'next/image';

import { Skeleton } from '@/components/common/Skeleton';
import { useUserQuery } from '@/hooks/apis/useUserQuery';

export const Profile = () => {
  const { email, name, profile, isLoading } = useUserQuery();

  return (
    <div className="flex w-full gap-8 p-16">
      {isLoading ? (
        <>
          <Skeleton className="size-37 rounded-8" />
          <div className="flex flex-col gap-8 py-4">
            <Skeleton className="h-12 w-30 rounded-12" />
            <Skeleton className="h-10 w-70 rounded-12" />
          </div>
        </>
      ) : (
        <>
          <Image
            src={profile}
            alt="profile picture"
            width={37}
            height={37}
            className="shrink-0 rounded-8"
            priority
          />
          <div className="flex w-full justify-between">
            <div>
              <p className="text-sm-medium">{name}</p>
              <p className="text-xs-medium">{email}</p>
            </div>
            <button className="text-xs-normal">로그아웃</button>
          </div>
        </>
      )}
    </div>
  );
};
