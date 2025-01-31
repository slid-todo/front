import { ContentTypes } from '@/types/data';
import { PostComments } from './PostComments';
import { PostContent } from './PostContent';
import { PostImage } from './PostImage';
import { PostLike } from './PostLike';
import { PostProfile } from './PostProfile';

interface PostProps {
  post: ContentTypes;
}

export function Post(props: PostProps) {
  const { post } = props;

  return (
    <div className="w-full flex-col gap-16 pb-24">
      <PostProfile
        createdAt={post.createdAt}
        username={post.username}
        profilePic={post.profilePic}
        userId={post.userId}
      />

      <PostImage completePic={post.completePic} completeId={post.completeId} />

      <div className="my-12 flex gap-16">
        <PostLike
          likeStatus={post.likeStatus}
          likeCount={post.likeCount}
          completeId={post.completeId}
        />
        <PostComments commentCount={post.commentCount} />
      </div>

      <PostContent
        text={post.completeContent}
        completeId={post.completeId}
        push
      />
    </div>
  );
}
