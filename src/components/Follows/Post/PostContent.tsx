import { useRouter } from 'next/navigation';
import { cn } from '@/utils/className';

interface PostContentProps {
  text: string | null;
  completeId: number;
}

export function PostContent(props: PostContentProps) {
  const { text, completeId } = props;

  const router = useRouter();

  const handleClickContent = () => {
    router.push(`/completes/${completeId}`);
  };

  return (
    <div
      className={cn(
        'mx-16 my-8 text-sm-normal cursor-pointer',
        text ? 'text-custom-gray-300' : 'text-custom-gray-100',
      )}
      onClick={handleClickContent}
    >
      {text ?? '본문 내용이 없습니다.'}
    </div>
  );
}
