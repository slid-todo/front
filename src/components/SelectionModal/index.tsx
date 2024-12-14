import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ModalContainer } from '../common/ModalContainer';
import { Button } from '../common/Button/Button';

interface SelectionModalProps {
  message: string;
  cancelButtonMessage: string;
  confirmButtonMessage: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const SelectionModal = (props: SelectionModalProps) => {
  const {
    message,
    cancelButtonMessage,
    confirmButtonMessage,
    isOpen,
    onClose,
    onConfirm,
  } = props;

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

  const handleConfirm = () => {
    onConfirm();
  };

  return createPortal(
    <ModalContainer onClose={onClose}>
      <motion.div
        className="flex min-h-174 w-300 flex-col items-center justify-between rounded-8 bg-white pb-32 pt-40 shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2 className="text-base-medium text-primary-100">
          {message}
          <span className=" text-slate-800"> 인증하기</span>
        </h2>
        <div className="mt-4 flex justify-end gap-8">
          <Button size="large" onClick={onClose}>
            {cancelButtonMessage}
          </Button>
          <Button size="large" onClick={handleConfirm}>
            {confirmButtonMessage}
          </Button>
        </div>
      </motion.div>
    </ModalContainer>,
    document.body,
  );
};
