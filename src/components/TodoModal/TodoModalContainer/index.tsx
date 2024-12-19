import { motion } from 'motion/react';
import {
  TodoModalDocs,
  TodoModalHeader,
  TodoModalRepeat,
  TodoModalGoal,
  TodoModalTitle,
} from '@/components/TodoModal';

import { Button } from '@/components/common/Button/Button';
import { useTodoModalStore } from '@/store/useTodoModalStore';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { todoModalVariants } from '@/constants/motionVariants';
import { todoDataValidation } from '@/utils/todoDataValidation';
import { useCreateTodo } from '@/hooks/apis/Todo/useCreateTodo';
import { ModalContainer } from '@/components/common/Modal';

const TodoModal = () => {
  const { isOpen, close, todoType } = useTodoModalStore();
  const { resetAll, getCreateTodoData } = useTodoDataStore();
  const { mutate } = useCreateTodo();

  const handleClick = () => {
    mutate(getCreateTodoData());
  };

  const handleClose = () => {
    close();
    resetAll();
  };

  if (!isOpen) {
    return null;
  }

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
            <TodoModalGoal />
            <TodoModalRepeat />
            <TodoModalDocs />
          </div>
          <Button
            size="large"
            primary={true}
            className="mt-auto"
            onClick={handleClick}
            disabled={todoDataValidation(
              getCreateTodoData().title,
              getCreateTodoData().goalId,
              getCreateTodoData().startDate,
              getCreateTodoData().endDate,
            )}
          >
            확인
          </Button>
        </div>
      </motion.div>
    </ModalContainer>
  );
};

export default TodoModal;
