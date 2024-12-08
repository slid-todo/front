import { motion } from 'motion/react';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { Input } from '@/components/common/Input';
import { todoModalVariants } from '@/utils/motionVariants';
import { useTodoDataStore } from '@/store/useTodoDataStore';

export const LinkUpload = () => {
  const { link, setLink } = useTodoDataStore();

  const handleLinkInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
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
        value={link}
        onChange={handleLinkInput}
      />
    </motion.div>
  );
};
