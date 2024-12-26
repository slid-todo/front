'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { todoModalVariants } from '@/constants/motionVariants';
import { useCertifiedTodo } from '@/hooks/apis/Todo/useCertifiedTodo';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';
import { notify } from '@/store/useToastStore';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { VerificationNote } from '../VerificationNote/VerificationNoteContainer';
import { ModalContainer } from '../common/Modal';
import { InputModalContent } from '../ImageInput';

interface CertifiedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertifiedModal = (props: CertifiedModalProps) => {
  const { isOpen, onClose } = props;

  const {
    imageUrl,
    completePicName,
    note,
    completeLink,
    completeId,
    todoTitle,
    reset,
    setImageUrl,
    setCompletePicName,
  } = useVerificationNoteStore();

  const { mutate } = useCertifiedTodo();

  const [isReCaptureOpen, setIsReCaptureOpen] = useState(false);

  const [prevImageUrl, setPrevImageUrl] = useState<string>('');

  useEffect(() => {
    if (!isOpen) {
      setIsReCaptureOpen(false);
      setPrevImageUrl('');
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    reset();
  };

  const handleSubmit = () => {
    if (!completeId) {
      notify('error', TOAST_MESSAGES.CERTIFIED_COMPLETEID, 3000);
      return;
    }

    if (!imageUrl) {
      notify('error', TOAST_MESSAGES.CERTIFIED_IMG, 3000);
      return;
    }

    const data = {
      completePicBase64: imageUrl,
      completePicName: completePicName || `${completeId}-image`,
      note: note || '',
      completeLink: completeLink || '임시링크',
    };

    mutate({ completeId, data });
    onClose();
    reset();
  };

  const handleReCapture = () => {
    setPrevImageUrl(imageUrl);

    setIsReCaptureOpen(true);
  };

  const handleCloseReCaptureModal = () => {
    if (!imageUrl) {
      setImageUrl(prevImageUrl);
    }
    setIsReCaptureOpen(false);
  };

  const handleReCaptureSelected = (newImageUrl: string) => {
    setImageUrl(newImageUrl);
    setCompletePicName(`${completeId ?? 'temp'}-image`);
    setIsReCaptureOpen(false);
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
        <VerificationNote
          onClose={handleClose}
          onSubmit={handleSubmit}
          onReCapture={handleReCapture}
        />
      </motion.div>
      <InputModalContent
        todoTitle={todoTitle}
        isOpen={isReCaptureOpen}
        onClose={handleCloseReCaptureModal}
        onImageSelected={handleReCaptureSelected}
      />
    </ModalContainer>
  );
};
