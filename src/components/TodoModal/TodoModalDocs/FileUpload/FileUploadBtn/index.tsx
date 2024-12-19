import { FaPlus } from 'react-icons/fa';
import { PLACEHOLDERS } from '@/constants/Placeholders';

interface FileUploadBtnProps {
  onClick: () => void;
}

export const FileUploadBtn = ({ onClick }: FileUploadBtnProps) => {
  return (
    <button
      className="inline-flex flex-col items-center justify-center gap-8"
      onClick={onClick}
    >
      <FaPlus className="size-24 text-slate-400" />
      <span className="text-sm-normal text-slate-400 sm:text-base-normal">
        {PLACEHOLDERS.FILE}
      </span>
    </button>
  );
};
