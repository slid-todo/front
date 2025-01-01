import { ContentTypes } from '@/types/data';
import { PostProfile } from './PostProfile';
import { PostImage } from './PostImage';
import { PostLike } from './PostLike';
import { PostComments } from './PostComments';
import { PostContent } from './PostContent';

interface PostProps {
  post: ContentTypes;
}

export function Post(props: PostProps) {
  const { post } = props;

  return (
    <div className="w-screen flex-col gap-16 pb-24">
      <PostProfile createdAt={post.createdAt} userName="홍길동" />

      <PostImage completePic={post.completePic} />

      <div className="my-12 flex gap-16">
        <PostLike
          likeStatus={post.likeStatus}
          likeCount={post.likeCount}
          completeId={post.completeId}
        />
        <PostComments commentCount={post.commentCount} />
      </div>

      <PostContent text="이 글의 본문 내용입니다. (추후 데이터 연동 예정)" />
    </div>
  );
}
