'use client';

import { motion } from 'motion/react';
import { todoModalVariants } from '@/constants/motionVariants';
import { ModalContainer } from '../common/Modal';
import { VerificationNote } from '../VerificationNote/VerificationNoteContainer';

interface CertifiedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertifiedModal = (props: CertifiedModalProps) => {
  const { isOpen, onClose } = props;

  const handleClose = () => {
    onClose();
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
        <VerificationNote />
      </motion.div>
    </ModalContainer>
  );
};
