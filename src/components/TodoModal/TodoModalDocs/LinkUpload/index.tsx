import { motion } from 'motion/react';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { Input } from '@/components/common/Input';
import { todoModalVariants } from '@/utils/motionVariants';

export const LinkUpload = () => {
  return (
    <motion.div
      className="w-full"
      variants={todoModalVariants}
      initial="hidden"
      animate="visible"
    >
      <Input type="url" placeholder={PLACEHOLDERS.LINK_INPUT} />
    </motion.div>
  );
};
