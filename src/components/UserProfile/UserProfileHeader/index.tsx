'use client';

import { IoMdClose } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/common/Button/Button';
import { useUserProfileQuery } from '@/hooks/apis/Auth/useUserProfileQuery';

interface UserProfileHeader {
  userId: string;
}

export const UserProfileHeader = ({ userId }: UserProfileHeader) => {
  const router = useRouter();

  const { name, profilePic, isFollow } = useUserProfileQuery(Number(userId));

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <IoMdClose className="size-24 cursor-pointer" onClick={handleBack} />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          {profilePic ? (
            <Image
              width={48}
              height={48}
              className="flex size-64 rounded-full"
              priority
              src={profilePic}
              alt={name ? `${name}의 프로필 사진` : '프로필 사진'}
            />
          ) : null}
          <span className="text-base-medium">{name}</span>
        </div>
        <Button size="small" primary={isFollow ? false : true}>
          {isFollow ? '팔로우' : '팔로잉'}
        </Button>
      </div>
    </>
  );
};
