import Image from 'next/image';
import { formatDateToRelativeTime } from '@/utils/date';

interface PostProfileProps {
  createdAt: string;
  username: string;
  profilePic: string;
}

export function PostProfile(props: PostProfileProps) {
  const { createdAt, username, profilePic } = props;

  const relativeTime = formatDateToRelativeTime(createdAt);

  return (
    <div className="flex h-40 items-center gap-10 px-16">
      <Image
        src={profilePic}
        alt="profilePic"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div>
        <div className="text-sm-medium text-custom-gray-300">{username}</div>
      </div>
      <div className="text-xs-medium text-custom-gray-100">{relativeTime}</div>
    </div>
  );
}
