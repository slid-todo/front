'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Skeleton } from '@/components/common/Skeleton';
import { useUserQuery } from '@/hooks/apis/useUserQuery';
import { useLogout } from '@/hooks/useLogout';
import { useSidebarStore } from '@/store/useSidebarStore';

export const Profile = () => {
  const { email, name, profile, isLoading } = useUserQuery();
  const [showSkeleton, setShowSkeleton] = useState(false);

  const router = useRouter();
  const { close } = useSidebarStore();
  const { logout } = useLogout();

  const handleRouteMyPage = () => {
    router.push('/myPage');
    close();
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setShowSkeleton(true), 200);
      return () => clearTimeout(timer);
    }

    setShowSkeleton(false);
  }, [isLoading]);

  return (
    <div className="flex min-h-53 w-full gap-8 p-16">
      {showSkeleton ? (
        <>
          <Skeleton className="size-37 rounded-8" />
          <div className="flex flex-col gap-8 py-4">
            <Skeleton className="h-12 w-30 rounded-12" />
            <Skeleton className="h-10 w-70 rounded-12" />
          </div>
        </>
      ) : (
        <div
          onClick={handleRouteMyPage}
          className="flex w-full cursor-pointer items-center justify-start"
        >
          {!isLoading && (
            <Image
              src={profile}
              alt="profile picture"
              width={37}
              height={37}
              sizes="100vw"
              className="aspect-square shrink-0 rounded-8 p-2"
              priority
            />
          )}
          <div className="flex w-full items-center justify-between pl-8">
            <div>
              <p className="text-sm-medium">{name}</p>
              <p className="text-xs-medium text-custom-gray-200">{email}</p>
            </div>
            <button
              className="text-xs-normal text-custom-gray-100"
              onClick={logout}
            >
              로그아웃
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
