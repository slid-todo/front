import { FaRegComment } from 'react-icons/fa6';

interface PostCommentsProps {
  commentCount: number;
}

export function PostComments(props: PostCommentsProps) {
  const { commentCount } = props;

  return (
    <div className="flex items-center">
      <FaRegComment className="ml-16 mr-12 size-22" />
      <p className="text-sm-semibold text-custom-gray-200">{commentCount}</p>
    </div>
  );
}
