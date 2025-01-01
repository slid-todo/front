import { FaRegHeart, FaHeart } from 'react-icons/fa6';

interface PostLikeProps {
  likeStatus: boolean;
  likeCount: number;
}

export function PostLike(props: PostLikeProps) {
  const { likeStatus, likeCount } = props;

  return (
    <div className="flex items-center">
      {likeStatus ? (
        <FaHeart className="m-12 size-22 bg-sub-pink" />
      ) : (
        <FaRegHeart className="ml-16 mr-12 size-22" />
      )}
      <div className="text-sm-normal text-custom-gray-200">{likeCount}</div>
    </div>
  );
}
