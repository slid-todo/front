import { ChangeEvent } from 'react';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { useTodoDataStore } from '@/store/useTodoDataStore';

export const TodoModalTitle = () => {
  const { todoData, setTodoData } = useTodoDataStore();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoData({ title: e.target.value });
  };

  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">제목</span>
      <Input
        placeholder={PLACEHOLDERS.TITLE_TODO}
        value={todoData.title}
        onChange={handleInput}
      />
    </div>
  );
};
