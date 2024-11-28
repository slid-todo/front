import { FaPlus } from 'react-icons/fa';

export const FileUpload = () => {
  return (
    <div className="flex h-184 w-full shrink-0 items-center justify-center rounded-12 bg-slate-50">
      <button className="inline-flex flex-col items-center justify-center gap-8">
        <FaPlus size={24} className="text-slate-400" />
        <span className="text-sm-normal text-slate-400 sm:text-base-normal">
          파일을 업로드해주세요
        </span>
      </button>
    </div>
  );
};
