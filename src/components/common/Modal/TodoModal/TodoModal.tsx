import { ModalContainer } from '../ModalContainer/ModalContainer';
import { TodoModalBtn } from './TodoModalBtn';
import { TodoModalDocs } from './TodoModalDocs';
import { TodoModalHeader } from './TodoModalHeader';
import { TodoModalTarget } from './TodoModalTarget';
import { TodoModalTitle } from './TodoModalTitle';

export interface TodoModalProps {
  onClose: () => void;
}

const TodoModal = ({ onClose }: TodoModalProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <div className="flex size-full flex-col items-start gap-10 bg-white px-16 py-24 sm:h-676 sm:w-520 sm:rounded-12 sm:p-24">
        <div className="flex flex-1 flex-col items-start gap-40 self-stretch">
          <div className="flex flex-col gap-24 self-stretch">
            <TodoModalHeader onClose={onClose} />
            <TodoModalTitle />
            <TodoModalDocs />
            <TodoModalTarget />
          </div>
          <TodoModalBtn />
        </div>
      </div>
    </ModalContainer>
  );
};

export default TodoModal;
