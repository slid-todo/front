import Image from 'next/image';

interface PostImageProps {
  completePic: string;
}

export function PostImage(props: PostImageProps) {
  const { completePic } = props;

  if (!completePic) {
    return <div className="my-8 aspect-square w-full bg-slate-600" />;
  }

  return (
    <div className="my-8 aspect-square w-full">
      <Image src={completePic} alt="post-image" fill />
    </div>
  );
}
