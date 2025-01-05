'use client';

import { IoMdClose } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/common/Button/Button';
import { useUserProfileQuery } from '@/hooks/apis/Auth/useUserProfileQuery';
import { useAssignFollowMutation } from '@/hooks/apis/Follow/useAssignFollowMutation';
import { useDeleteFollowMutation } from '@/hooks/apis/Follow/useDeleteFollowMutation';

interface UserProfileHeader {
  userId: string;
}

export const UserProfileHeader = ({ userId }: UserProfileHeader) => {
  const router = useRouter();

  const { name, profilePic, isFollow } = useUserProfileQuery(Number(userId));
  const { mutate: assignFollow } = useAssignFollowMutation();
  const { mutate: deleteFollow } = useDeleteFollowMutation();

  const handleBack = () => {
    router.back();
  };

  const handleClickFollow = () => {
    if (isFollow) {
      deleteFollow(Number(userId));
    } else {
      assignFollow(Number(userId));
    }
  };

  return (
    <div className="flex flex-col gap-16">
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
        <Button
          size="small"
          primary={isFollow ? false : true}
          onClick={handleClickFollow}
        >
          {isFollow === true ? '팔로잉' : '팔로우'}
        </Button>
      </div>
    </div>
  );
};
