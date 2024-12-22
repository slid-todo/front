import { FaLink } from 'react-icons/fa';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';

export const VerificationNoteFooter = () => {
  const { note } = useVerificationNoteStore();

  return (
    <div className="mt-auto flex w-full items-center justify-between bg-custom-white-200 p-16">
      <div className="flex items-center gap-8">
        <FaLink className="size-24 text-primary-100" />
        <span className="text-sm-medium text-primary-100">임베드</span>
      </div>
      <div className="flex items-center gap-16">
        <div>
          <span
            className={`text-xs-medium ${note.length > 100 ? 'text-error' : 'text-custom-gray-300'} `}
          >
            {note.length}
          </span>
          <span className="text-xs-medium text-custom-gray-300">/100</span>
        </div>
        <span className="text-sm-medium text-primary-100">임시저장</span>
      </div>
    </div>
  );
};
