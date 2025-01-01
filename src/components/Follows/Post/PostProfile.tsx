import { formatDateToRelativeTime } from '@/utils/date';

interface PostProfileProps {
  createdAt: string;
  userName: string;
}

export function PostProfile(props: PostProfileProps) {
  const { createdAt, userName } = props;

  const relativeTime = formatDateToRelativeTime(createdAt);

  return (
    <div className="flex h-40 items-center gap-10 px-16">
      <div className="size-40 rounded-full bg-sub-yellow" />
      <div>
        <div className="text-sm-medium text-custom-gray-300">{userName}</div>
      </div>
      <div className="text-xs-medium text-custom-gray-100">{relativeTime}</div>
    </div>
  );
}
