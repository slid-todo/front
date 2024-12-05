import { motion } from 'motion/react';
import { TodoModalProps } from '@/types/TodoType';
import { ModalContainer } from '@/components/common/Modal/ModalContainer';
import { useTodoModalStore } from '@/store/useTodoModalStore';
import { todoModalVariants } from '@/utils/motionVariants';
import { TodoModalBtn } from './TodoModalBtn';
import { TodoModalDocs } from './TodoModalDocs';
import { TodoModalHeader } from './TodoModalHeader';
import { TodoModalTarget } from './TodoModalTarget';
import { TodoModalTitle } from './TodoModalTitle';
import { TodoModalRepeat } from './TodoModalRepeat';

const TodoModal = ({ todoType }: TodoModalProps) => {
  const { close } = useTodoModalStore();

  const handleClose = () => {
    close();
  };

  return (
    <ModalContainer onClose={handleClose}>
      <motion.div
        variants={todoModalVariants}
        initial="hidden"
        animate="visible"
        className="flex size-full flex-col items-start gap-10 overflow-y-auto bg-custom-white-100 px-16 py-24 sm:h-auto sm:w-520 sm:rounded-12 sm:p-24"
      >
        <div className="flex flex-1 flex-col items-start gap-40 self-stretch">
          <div className="flex flex-col gap-24 self-stretch">
            <TodoModalHeader todoType={todoType} onClose={handleClose} />
            <TodoModalTitle />
            <TodoModalTarget />
            <TodoModalRepeat />
            <TodoModalDocs />
          </div>
          <TodoModalBtn />
        </div>
      </motion.div>
    </ModalContainer>
  );
};

export default TodoModal;
