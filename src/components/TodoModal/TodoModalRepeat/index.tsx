// import { PiTildeBold } from 'react-icons/pi';
import { Date } from './Date';

export const TodoModalRepeat = () => {
  return (
    <div className="relative flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">기간</span>
      <div className="flex-center w-full gap-10">
        <Date />
      </div>
    </div>
  );
};
