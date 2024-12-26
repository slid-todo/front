'use client';

import { FaLink } from 'react-icons/fa';
import { ConfirmationModal } from '@/components/ConfirmationModal';
import { MODAL_MESSAGES } from '@/constants/Messages';
import { useVerificationNoteFooter } from '@/hooks/Verification/useVerificationNoteFooter';

export const VerificationNoteFooter = () => {
  const {
    note,
    isSaved,
    isModalOpen,
    confirmationMode,
    handleClick,
    handleCloseModal,
    handleConfirm,
    handleCancel,
  } = useVerificationNoteFooter();

  return (
    <div className="mt-auto flex w-full items-center justify-between bg-custom-white-200 p-16">
      <div className="flex items-center gap-8">
        <FaLink className="size-24 text-primary-100" />
        <span className="text-sm-medium text-primary-100">임베드</span>
      </div>
      <div className="flex items-center gap-16">
        <div>
          <span
            className={`text-xs-medium ${
              note.length > 100 ? 'text-error' : 'text-custom-gray-300'
            } `}
          >
            {note.length}
          </span>
          <span className="text-xs-medium text-custom-gray-300">/100</span>
        </div>

        <span
          className="cursor-pointer text-sm-medium text-primary-100"
          onClick={handleClick}
        >
          {isSaved ? MODAL_MESSAGES.LOAD_TITLE : MODAL_MESSAGES.SAVE_TITLE}
        </span>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        title={
          confirmationMode === 'save'
            ? MODAL_MESSAGES.SAVE_TITLE
            : MODAL_MESSAGES.LOAD_TITLE
        }
        description={
          confirmationMode === 'save'
            ? MODAL_MESSAGES.SAVE_CONFIRM_DESCRIPTION
            : MODAL_MESSAGES.LOAD_CONFIRM_DESCRIPTION
        }
        confirmText={MODAL_MESSAGES.CONFIRM_TEXT}
        cancelText={MODAL_MESSAGES.CANCEL_TEXT}
      />
    </div>
  );
};
