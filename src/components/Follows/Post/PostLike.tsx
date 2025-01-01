import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import { useCreateLike } from '@/hooks/apis/Likes/useCreateLikeQuery';
import { useDeleteLike } from '@/hooks/apis/Likes/useDeleteLikeQuery';

interface PostLikeProps {
  completeId: number;
  likeStatus: boolean;
  likeCount: number;
}

export function PostLike({ completeId, likeStatus, likeCount }: PostLikeProps) {
  const { mutate: createLike } = useCreateLike();
  const { mutate: deleteLike } = useDeleteLike();

  const handleClickLike = () => {
    if (likeStatus) {
      deleteLike(completeId);
    } else {
      createLike(completeId);
    }
  };

  return (
    <div className="flex items-center">
      {likeStatus ? (
        <FaHeart
          className="ml-16 mr-12 size-22 cursor-pointer fill-sub-pink"
          onClick={handleClickLike}
        />
      ) : (
        <FaRegHeart
          className="ml-16 mr-12 size-22 cursor-pointer"
          onClick={handleClickLike}
        />
      )}
      <div className="text-sm-normal text-custom-gray-200">{likeCount}</div>
    </div>
  );
}
