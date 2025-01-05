import { FaHeart } from 'react-icons/fa6';

import { useRouter } from 'next/navigation';

import { ContentTypes } from '@/types/data';
import { cn } from '@/utils/className';
import { formatDateToRelativeTime } from '@/utils/date';

interface FollowerStoryProps {
  follower: ContentTypes;
}

export const FollowerStory = ({ follower }: FollowerStoryProps) => {
  const router = useRouter();

  const heartClass = cn(
    'absolute right-8 top-8 size-28 p-4',
    follower.likeStatus ? 'text-error' : 'text-custom-gray-200',
  );

  const handleClickImage = () => {
    router.push(`/completes/${follower.completeId}`);
  };

  return (
    <div
      onClick={handleClickImage}
      className="shrink-0 cursor-pointer snap-start"
    >
      <div className="relative size-120 rounded-20 bg-custom-white-300">
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
