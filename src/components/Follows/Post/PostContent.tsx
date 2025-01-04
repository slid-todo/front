import { useRouter } from 'next/navigation';
import { cn } from '@/utils/className';

interface PostContentProps {
  text: string | null;
  completeId: number;
  push?: boolean;
}

export function PostContent(props: PostContentProps) {
  const { text, completeId, push = false } = props;

  const router = useRouter();

  const handleClickContent = () => {
    router.push(`/completes/${completeId}`);
  };

  return (
    <div
      className={cn(
        'mx-16 my-8 text-sm-normal',
        text ? 'text-custom-gray-300' : 'text-custom-gray-100',
        push ? 'cursor-pointer' : '',
      )}
      onClick={push ? handleClickContent : undefined}
    >
      {text ?? '본문 내용이 없습니다.'}
    </div>
  );
}
