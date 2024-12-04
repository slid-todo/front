import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';

export const TodoModalRepeat = () => {
  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">기간</span>
      <Input placeholder={PLACEHOLDERS.REPEAT} />
    </div>
  );
};
