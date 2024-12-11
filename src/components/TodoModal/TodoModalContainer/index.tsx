import { motion } from 'motion/react';
import {
  TodoModalDocs,
  TodoModalHeader,
  TodoModalRepeat,
  TodoModalGoal,
  TodoModalTitle,
} from '@/components/TodoModal';
import { ModalContainer } from '@/components/common/ModalContainer';
import { Button } from '@/components/common/Button/Button';
import { TodoModalProps } from '@/types/TodoType';
import { useTodoModalStore } from '@/store/useTodoModalStore';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { todoModalVariants } from '@/constants/motionVariants';
import { todoDataValidation } from '@/utils/todoDataValidation';
import { useCreateTodo } from '@/hooks/useCreateTodo';

const TodoModal = ({ todoType }: TodoModalProps) => {
  const { close } = useTodoModalStore();
  const {
    resetAll,
    title,
    goal,
    date,
    imageEncodedBase64,
    imageName,
    todoLink,
  } = useTodoDataStore();

  const { mutate } = useCreateTodo();

  const viewData = () => {
    const todoData = {
      title,
      startDate: date.startDate, // Assuming date is in an appropriate format
      endDate: date.endDate, // Adjust accordingly
      todoLink,
      imageName,
      imageEncodedBase64,
      goalId: goal.goalId,
    };
    mutate(todoData);
    // console.log(title, goal, date, imageEncodedBase64, imageName, todoLink);
  };

  const handleClose = () => {
    close();
    resetAll();
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
            <TodoModalGoal />
            <TodoModalRepeat />
            <TodoModalDocs />
          </div>
          <Button
            size="large"
            primary={true}
            className="mt-auto"
            onClick={viewData}
            disabled={todoDataValidation(title, goal.goalId, date)}
          >
            확인
          </Button>
        </div>
      </motion.div>
    </ModalContainer>
  );
};

export default TodoModal;
