import { VerificationNoteHeader } from './VerificationNoteHeader';
import { VerificationNoteImage } from './VerificationNoteImage';
import { VerificationNoteTextarea } from './VerificationNoteTextarea';
import { VerificationNoteTarget } from './VerificationNoteTarget';
import { VerificationNoteTodo } from './VerificationNoteTodo';
import { VerificationNoteFooter } from './VerificationNoteFooter';

export const VerificationNote = () => {
  return (
    <div className="flex size-full flex-col gap-24 bg-custom-white-100">
      {/* 1st content */}
      <div className="flex-center w-full flex-col gap-24 px-16 pt-8">
        <VerificationNoteHeader />
        <VerificationNoteImage />
        <VerificationNoteTextarea />
      </div>
      {/* 2nd content */}
      <hr className="h-6 w-full bg-custom-white-200" />
      {/* 3rd content */}
      <div className="flex w-full flex-col gap-24 px-16">
        <VerificationNoteTarget />
        <VerificationNoteTodo />
      </div>
      {/* 4th content */}
      <VerificationNoteFooter />
    </div>
  );
};
