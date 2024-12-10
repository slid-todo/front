import { IoMdClose } from 'react-icons/io';
import { Button } from '@/components/common/Button/Button';

export const VerificationNoteHeader = () => {
  return (
    <div className="flex w-full items-center justify-between py-4">
      <div className="flex items-center gap-16">
        <IoMdClose className="size-24 cursor-pointer" />
        <span className="text-xl-semibold">할 일 상세보기 </span>
      </div>
      <Button className="h-36" size="small" radius={false}>
        작성완료
      </Button>
    </div>
  );
};
