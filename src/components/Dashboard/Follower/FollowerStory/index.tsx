import { FaHeart } from 'react-icons/fa6';

import { FollowerTypes } from '@/mocks/followerData';
import { cn } from '@/utils/className';
import { formatDateToRelativeTime } from '@/utils/date';

interface FollowerStoryProps {
  follower: FollowerTypes;
}

export const FollowerStory = ({ follower }: FollowerStoryProps) => {
  const heartClass = cn(
    'absolute right-8 top-8 size-28 p-4',
    follower.likeStatus ? 'text-error' : 'text-custom-gray-200',
  );

  return (
    <div className="shrink-0 snap-start">
      <div className="relative size-120 rounded-20 bg-custom-white-300">
        <FaHeart className={heartClass} />
      </div>
      <div className="pt-8">
        <span className="mr-4 text-xs-medium">{follower.name}</span>
        <span className="text-xs-normal text-custom-gray-200">
          {formatDateToRelativeTime(follower.createdAt)}
        </span>
      </div>
    </div>
  );
};
