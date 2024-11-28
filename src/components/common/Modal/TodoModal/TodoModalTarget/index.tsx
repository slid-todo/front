import { FaSortDown } from 'react-icons/fa';

export const TodoModalTarget = () => {
  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">목표</span>
      <div className="flex items-center justify-between self-stretch rounded-12 bg-slate-50 px-20 py-12 text-sm-normal sm:text-base-normal">
        <input
          className="bg-slate-50 focus:outline-none"
          placeholder="목표를 선택해주세요"
        />
        <FaSortDown className="cursor-pointer" size={24} />
      </div>
    </div>
  );
};
