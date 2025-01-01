import Image from 'next/image';

interface PostImageProps {
  completePic: string;
}

export function PostImage({ completePic }: PostImageProps) {
  if (!completePic) {
    return (
      <div style={{ marginBottom: '8px', color: 'gray' }}>
        이미지가 없습니다.
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '8px' }}>
      <Image src={completePic} alt="post-image" width={100} height={100} />
    </div>
  );
}
