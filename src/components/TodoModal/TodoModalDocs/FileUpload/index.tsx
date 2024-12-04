import { FaPlus } from 'react-icons/fa';
import { PLACEHOLDERS } from '@/constants/Placeholders';

export const FileUpload = () => {
  return (
    <div className="flex h-184 w-full shrink-0 items-center justify-center rounded-12 bg-slate-50">
      <button className="inline-flex flex-col items-center justify-center gap-8">
        <FaPlus className="size-24 text-slate-400" />
        <span className="text-sm-normal text-slate-400 sm:text-base-normal">
          {PLACEHOLDERS.FILE}
        </span>
      </button>
    </div>
  );
};
