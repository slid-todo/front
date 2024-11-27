import TodoModalDocs from './TodoModalDocs';
import TodoModalHeader from './TodoModalHeader';
import TodoModalTarget from './TodoModalTarget';
import TodoModalTitle from './TodoModalTitle';

const TodoModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="flex size-full flex-col items-start gap-10 bg-white px-16 py-24 sm:h-676 sm:w-520 sm:rounded-12 sm:p-24">
        <div className="flex flex-1 flex-col items-start gap-40 self-stretch">
          <div className="flex flex-col gap-24 self-stretch">
            <TodoModalHeader />
            <TodoModalTitle />
            <TodoModalDocs />
            <TodoModalTarget />
          </div>

          <button className="mt-auto flex w-full items-center justify-center gap-10 self-stretch rounded-12 bg-slate-400 py-12 sm:mt-0">
            <span className="text-base-semibold text-white">확인</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
