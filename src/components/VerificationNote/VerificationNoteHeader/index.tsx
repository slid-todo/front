import { IoMdClose } from 'react-icons/io';
import { Button } from '@/components/common/Button/Button';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';

interface VerificationNoteHeaderProps {
  onClose: () => void;
  onSubmit: () => void;
}

export const VerificationNoteHeader = ({
  onClose,
  onSubmit,
}: VerificationNoteHeaderProps) => {
  const { note } = useVerificationNoteStore();

  return (
    <div className="flex w-full items-center justify-between py-4">
      <div className="flex items-center gap-16">
        <IoMdClose className="size-24 cursor-pointer" onClick={onClose} />
        <span className="text-xl-semibold">인증</span>
      </div>
      <Button
        className="h-36"
        size="small"
        radius={false}
        disabled={note.length > 100 ? true : false}
        onClick={onSubmit}
      >
        작성완료
      </Button>
    </div>
  );
};
