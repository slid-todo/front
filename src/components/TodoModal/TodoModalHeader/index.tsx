import { IoMdClose } from 'react-icons/io';
import { TodoModalProps } from '@/types/TodoType';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { StatusButton } from './StatusButton';

export const TodoModalHeader = ({ todoType, onClose }: TodoModalProps) => {
  const { todoData, setTodoData } = useTodoDataStore();

  const handleClose = () => {
    onClose?.();
  };

  return (
    <div className="flex flex-col gap-8 self-stretch">
      <div className="flex items-center justify-between">
        <span className="text-lg-bold text-slate-800">
          {todoType === '생성' ? '할 일 생성' : '할 일 수정'}
        </span>
        <IoMdClose className="size-24 cursor-pointer" onClick={handleClose} />
      </div>
      {todoType !== '생성' && (
        <div className="flex gap-18">
          <StatusButton
            todoStatus="진행"
            activeStatus={todoData.todoStatus}
            onClick={() => setTodoData({ todoStatus: '진행' })}
          />
          <StatusButton
            todoStatus="인증"
            activeStatus={todoData.todoStatus}
            onClick={() => setTodoData({ todoStatus: '인증' })}
          />
        </div>
      )}
    </div>
  );
};
