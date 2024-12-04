import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';

export const TodoModalTitle = () => {
  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">제목</span>
      <Input placeholder={PLACEHOLDERS.TITLE_TODO} />
    </div>
  );
};
