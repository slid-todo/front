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
  onClose: () => void;
  onSubmit: () => void;
  onReCapture?: () => void;
}

export const VerificationNote = ({
  onClose,
  onSubmit,
  onReCapture,
}: VerificationNoteProps) => {
  return (
    <div className="flex size-full flex-col gap-24 bg-custom-white-100">
      <div className="flex-center w-full flex-col gap-24 px-16 pt-8">
        <VerificationNoteHeader onClose={onClose} onSubmit={onSubmit} />
        <VerificationNoteImage onReCapture={onReCapture} />
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
