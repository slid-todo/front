import Image from 'next/image';

interface PostImageProps {
  completePic: string;
}

export function PostImage(props: PostImageProps) {
  const { completePic } = props;

  if (!completePic) {
    return (
      <div
        className="my-8 w-full bg-slate-600"
        style={{ aspectRatio: '1 / 1' }}
      />
    );
  }

  return (
    <div className="my-8 w-full" style={{ aspectRatio: '1 / 1' }}>
      <Image src={completePic} alt="post-image" fill />
    </div>
  );
}
