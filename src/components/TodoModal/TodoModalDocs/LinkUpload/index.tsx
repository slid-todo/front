import { motion } from 'motion/react';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { Input } from '@/components/common/Input';

export const LinkUpload = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="w-full"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <Input type="url" placeholder={PLACEHOLDERS.LINK_INPUT} />
    </motion.div>
  );
};
