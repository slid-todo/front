import { PLACEHOLDERS } from '@/constants/Placeholders';

export const TodoModalRepeat = () => {
  return (
    <div className="mt-20 flex flex-col items-start gap-12 self-stretch sm:mt-0">
      <span className="text-base-semibold text-slate-800">반복 설정</span>
      <div className="flex items-center justify-start self-stretch rounded-12 bg-slate-50 px-20 py-12 text-sm-normal sm:text-base-normal">
        <input
          className="bg-slate-50 focus:outline-none"
          placeholder={PLACEHOLDERS.REPEAT}
        />
      </div>
    </div>
  );
};
