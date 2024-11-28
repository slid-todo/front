import { FaSortDown } from 'react-icons/fa';
import { PLACEHOLDERS } from '@/constants/Placeholders';

export const TodoModalTarget = () => {
  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">목표</span>
      <div className="flex-center self-stretch rounded-12 bg-slate-50 px-20 py-12 text-sm-normal sm:text-base-normal">
        <input
          className="bg-slate-50 focus:outline-none"
          placeholder={PLACEHOLDERS.TARGET}
        />
        <FaSortDown className="size-24 cursor-pointer" />
      </div>
    </div>
  );
};
