import { GrDocument } from 'react-icons/gr';
import { FaPlus } from 'react-icons/fa';
import { PLACEHOLDERS } from '@/constants/Placeholders';

interface FileUploadBtnProps {
  fileName: string | null;
  onClick: () => void;
}

export const FileUploadBtn = ({ fileName, onClick }: FileUploadBtnProps) => {
  return (
    <button
      className="inline-flex flex-col items-center justify-center gap-8"
      onClick={onClick}
    >
      {fileName ? (
        <GrDocument className="size-24 text-slate-400" />
      ) : (
        <FaPlus className="size-24 text-slate-400" />
      )}
      <span className="text-sm-normal text-slate-400 sm:text-base-normal">
        {fileName ? fileName : PLACEHOLDERS.FILE}
      </span>
    </button>
  );
};
