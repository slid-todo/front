import { FaHeart } from 'react-icons/fa6';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ContentTypes } from '@/types/data';
import { cn } from '@/utils/className';
import { formatDateToRelativeTime } from '@/utils/date';

interface FollowerStoryProps {
  follower: ContentTypes;
}

export const FollowerStory = ({ follower }: FollowerStoryProps) => {
  const router = useRouter();
  const pic = follower.completePic;

  const heartClass = cn(
    'absolute right-8 top-8 size-28 p-4',
    follower.likeStatus ? 'text-error' : 'text-custom-white-300',
  );

  const handleClickImage = () => {
    router.push(`/completes/${follower.completeId}`);
  };

  return (
    <div
      onClick={handleClickImage}
      className="shrink-0 cursor-pointer snap-start"
    >
      <div className="relative">
        {pic ? (
          <Image
            src={pic}
            width={120}
            height={120}
            alt="팔로워 인증 사진"
            className="size-120 rounded-20 object-cover"
          />
        ) : (
          <div className="size-120 rounded-20 bg-custom-gray-100" />
        )}
        <FaHeart className={heartClass} />
      </div>

      <div className="ml-4 pt-8">
        <span className="mr-4 text-xs-medium">{follower.username}</span>
        <span className="text-xs-normal text-custom-gray-200">
          {formatDateToRelativeTime(follower.createdAt)}
        </span>
      </div>
    </div>
  );
};
