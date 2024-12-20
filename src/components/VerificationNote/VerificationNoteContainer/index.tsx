import {
  VerificationNoteHeader,
  VerificationNoteImage,
  VerificationNoteTextarea,
  VerificationNoteTarget,
  VerificationNoteTodo,
  VerificationNoteFooter,
  VerificationNoteFile,
} from '@/components/VerificationNote';

interface VerificationNoteProps {
  onClose: () => void; // onClose prop 추가
}

export const VerificationNote = ({ onClose }: VerificationNoteProps) => {
  return (
    <div className="flex size-full flex-col gap-24 bg-custom-white-100">
      <div className="flex-center w-full flex-col gap-24 px-16 pt-8">
        {/* onClose prop을 VerificationNoteHeader에 전달 */}
        <VerificationNoteHeader onClose={onClose} />
        <VerificationNoteImage />
        <VerificationNoteTextarea />
      </div>
      <hr className="h-6 w-full bg-custom-white-200" />
      <div className="flex w-full flex-col gap-24 px-16">
        <VerificationNoteTarget />
        <VerificationNoteTodo />
        <VerificationNoteFile />
      </div>
      <VerificationNoteFooter />
    </div>
  );
};
