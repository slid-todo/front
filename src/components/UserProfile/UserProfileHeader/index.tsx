'use client';

import { IoMdClose } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/common/Button/Button';

interface UserProfileHeader {
  userId: string;
}

export const UserProfileHeader = ({ userId }: UserProfileHeader) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <IoMdClose className="size-24 cursor-pointer" onClick={handleBack} />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Image
            width={48}
            height={48}
            className="flex size-64 rounded-full"
            priority
            src="https://slid-todo.s3.ap-northeast-2.amazonaws.com/a19c4793-d33b-4be6-9f65-097bed5a6709_testmouse1.png"
            alt="프로필 사진"
          />
          <span className="text-base-medium">체다치즈 {userId}</span>
        </div>
        <Button size="small" primary={false}>
          팔로우
        </Button>
      </div>
    </>
  );
};
