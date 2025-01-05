'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { formatDateToRelativeTime } from '@/utils/date';

interface PostProfileProps {
  createdAt: string;
  username: string;
  profilePic: string;
  userId: number;
}

export function PostProfile(props: PostProfileProps) {
  const { createdAt, username, profilePic, userId } = props;
  const router = useRouter();

  const relativeTime = formatDateToRelativeTime(createdAt);

  const handleClickProfile = () => {
    router.push(`/userProfile/${userId}`);
  };

  return (
    <div
      className="flex h-40 cursor-pointer items-center gap-10 px-16"
      onClick={handleClickProfile}
    >
      <Image
        src={profilePic}
        alt="profilePic"
        width={40}
        height={40}
        className="max-h-40 max-w-40 rounded-full"
      />
      <div>
        <div className="text-sm-medium text-custom-gray-300">{username}</div>
      </div>
      <div className="mt-2 text-xs-medium text-custom-gray-100">
        {relativeTime}
      </div>
    </div>
  );
}
