'use client';

import { motion } from 'motion/react';
import { todoModalVariants } from '@/constants/motionVariants';
import { useCertifiedTodo } from '@/hooks/apis/Todo/useCertifiedTodo';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';
import { notify } from '@/store/useToastStore';
import { VerificationNote } from '../VerificationNote/VerificationNoteContainer';
import { ModalContainer } from '../common/Modal';

interface CertifiedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertifiedModal = (props: CertifiedModalProps) => {
  const { isOpen, onClose } = props;
  const { imageUrl, completePicName, note, completeLink, completeId, reset } =
    useVerificationNoteStore();
  const { mutate } = useCertifiedTodo();

  const handleClose = () => {
    onClose();
    reset();
  };

  const handleSubmit = () => {
    if (!completeId) {
      notify('error', 'completeId가 설정되지 않았습니다.', 3000);
      return;
    }

    if (!imageUrl) {
      notify('error', '이미지가 선택되지 않았습니다.', 3000);
      return;
    }

    const data = {
      completePicBase64: imageUrl,
      completePicName: completePicName || `${completeId}-image`,
      note: note || '',
      completeLink: completeLink || '임시링크',
    };

    mutate({ completeId, data });
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
        <VerificationNote onClose={handleClose} onSubmit={handleSubmit} />
      </motion.div>
    </ModalContainer>
  );
};
