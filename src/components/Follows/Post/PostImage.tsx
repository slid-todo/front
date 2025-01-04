import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface PostImageProps {
  completePic: string;
  completeId: number;
}

export function PostImage(props: PostImageProps) {
  const { completePic, completeId } = props;
  const router = useRouter();

  const handleClickImage = () => {
    router.push(`/completes/${completeId}`);
  };

  if (!completePic) {
    return (
      <div
        className="my-8 aspect-square  cursor-pointer bg-slate-600"
        onClick={handleClickImage}
      />
    );
  }

  return (
    <div
      className="my-8 aspect-square w-full cursor-pointer"
      onClick={handleClickImage}
    >
      <Image src={completePic} alt="post-image" fill />
    </div>
  );
}
