import { ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { Input } from '@/components/common/Input';
import { todoModalVariants } from '@/constants/motionVariants';
import { useTodoDataStore } from '@/store/useTodoDataStore';

export const LinkUpload = () => {
  const { todoData, setTodoData } = useTodoDataStore();

  const handleLinkInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoData({ todoLink: e.target.value });
  };

  return (
    <motion.div
      className="w-full"
      variants={todoModalVariants}
      initial="hidden"
      animate="visible"
    >
      <Input
        type="url"
        placeholder={PLACEHOLDERS.LINK_INPUT}
        value={todoData.todoLink}
        onChange={handleLinkInput}
      />
    </motion.div>
  );
};
