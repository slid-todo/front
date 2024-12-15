import { useEffect, ReactNode } from 'react';
import { motion } from 'motion/react';
import { ModalContainer } from './ModalContainer';

interface ModalContentProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const ModalContent = (props: ModalContentProps) => {
  const { isOpen, onClose, children } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer onClose={onClose}>
      <motion.div
        className="flex min-h-174 w-300 flex-col items-center justify-between rounded-8 bg-white pb-32 pt-40 shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </ModalContainer>
  );
};
