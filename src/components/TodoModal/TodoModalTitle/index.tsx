import { PLACEHOLDERS } from '@/constants/Placeholders';

export const TodoModalTitle = () => {
  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">제목</span>
      <input
        className="flex items-center gap-10 self-stretch rounded-12 bg-slate-50 px-24 py-12 text-sm-normal focus:outline-none sm:text-base-normal"
        placeholder={PLACEHOLDERS.TITLE_TODO}
      />
    </div>
  );
};
