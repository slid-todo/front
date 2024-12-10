import { FaLink } from 'react-icons/fa';

export const VerificationNoteFooter = () => {
  return (
    <div className="mt-auto flex w-full items-center justify-between bg-custom-white-200 p-16">
      <div className="flex items-center gap-8">
        <FaLink className="size-24 text-primary-100" />
        <span className="text-sm-medium text-primary-100">임베드</span>
      </div>
      <div className="flex items-center gap-16">
        <span className="text-xs-medium text-custom-gray-300">0/100</span>
        <span className="text-sm-medium text-primary-100">임시저장</span>
      </div>
    </div>
  );
};
