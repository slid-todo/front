import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { useTodoDataStore } from '@/store/useTodoDataStore';

export const TodoModalTitle = () => {
  const { title, setTitle } = useTodoDataStore();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">제목</span>
      <Input
        placeholder={PLACEHOLDERS.TITLE_TODO}
        value={title}
        onChange={handleInput}
      />
    </div>
  );
};
