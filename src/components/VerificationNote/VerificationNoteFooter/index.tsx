'use client';

import { useState, useEffect } from 'react';
import { FaLink } from 'react-icons/fa';

import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';
import { ConfirmationModal } from '@/components/ConfirmationModal';
import { notify } from '@/store/useToastStore';
import { MODAL_MESSAGES, TOAST_MESSAGES } from '@/constants/Messages';

export const VerificationNoteFooter = () => {
  const {
    note,
    imageUrl,
    completePicName,
    completeLink,
    completeId,
    setImageUrl,
    setCompletePicName,
    setNote,
    setCompleteLink,
    setCompleteId,
  } = useVerificationNoteStore();

  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationMode, setConfirmationMode] = useState<'save' | 'load'>(
    'save',
  );

  useEffect(() => {
    const savedData = localStorage.getItem('verificationNote');
    if (savedData) {
      setIsSaved(true);
    }
  }, []);

  const handleClick = () => {
    if (isSaved) {
      setConfirmationMode('load');
    } else {
      setConfirmationMode('save');
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    if (confirmationMode === 'save') {
      const dataToSave = {
        imageUrl,
        completePicName,
        note,
        completeLink,
        completeId,
      };
      localStorage.setItem('verificationNote', JSON.stringify(dataToSave));

      notify('success', TOAST_MESSAGES.SAVE_SUCCESS, 3000);
      setIsSaved(true);
    } else {
      const savedData = localStorage.getItem('verificationNote');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setImageUrl(parsedData.imageUrl);
        setCompletePicName(parsedData.completePicName);
        setNote(parsedData.note);
        setCompleteLink(parsedData.completeLink);
        setCompleteId(parsedData.completeId);

        localStorage.removeItem('verificationNote');
        setIsSaved(false);
        notify('success', TOAST_MESSAGES.LOAD_SUCCESS, 3000);
      }
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
