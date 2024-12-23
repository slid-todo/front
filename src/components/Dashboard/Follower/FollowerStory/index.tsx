import { FollowerTypes } from '@/mocks/followerData';
import { formatDateToRelativeTime } from '@/utils/date';

interface FollowerStoryProps {
  follower: FollowerTypes;
}

export const FollowerStory = ({ follower }: FollowerStoryProps) => {
  return (
    <div className="shrink-0 snap-start">
      <div className="size-120 rounded-20 bg-custom-white-300" />
      <div className="pt-8">
        <span className="mr-4 text-xs-medium">{follower.name}</span>
        <span className="text-xs-normal text-custom-gray-200">
          {formatDateToRelativeTime(follower.createdAt)}
        </span>
      </div>
    </div>
  );
};
