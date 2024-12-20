import { IoMdClose } from 'react-icons/io';
import { Button } from '@/components/common/Button/Button';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';

interface VerificationNoteHeaderProps {
  onClose: () => void; // onClose prop 추가
}

export const VerificationNoteHeader = ({
  onClose,
}: VerificationNoteHeaderProps) => {
  const { review } = useVerificationNoteStore();

  return (
    <div className="flex w-full items-center justify-between py-4">
      <div className="flex items-center gap-16">
        {/* onClick 이벤트에 onClose 함수 연결 */}
        <IoMdClose className="size-24 cursor-pointer" onClick={onClose} />
        <span className="text-xl-semibold">인증</span>
      </div>
      <Button
        className="h-36"
        size="small"
        radius={false}
        disabled={review.length > 100 ? true : false}
      >
        작성완료
      </Button>
    </div>
  );
};
