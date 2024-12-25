import { useState, useEffect } from 'react';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';
import { notify } from '@/store/useToastStore';
import { TOAST_MESSAGES } from '@/constants/Messages';
import { LOCAL_STORAGE_KEYS } from '@/constants/keys';

type ConfirmationMode = 'save' | 'load';

export const useVerificationNoteFooter = () => {
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
  const [confirmationMode, setConfirmationMode] =
    useState<ConfirmationMode>('save');

  useEffect(() => {
    const savedData = localStorage.getItem(
      LOCAL_STORAGE_KEYS.VERIFICATION_NOTE,
    );
    if (savedData) {
      setIsSaved(true);
    }
  }, []);

  const handleClick = () => {
    setConfirmationMode(isSaved ? 'load' : 'save');
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
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.VERIFICATION_NOTE,
        JSON.stringify(dataToSave),
      );

      notify('success', TOAST_MESSAGES.SAVE_SUCCESS, 3000);
      setIsSaved(true);
    } else {
      const savedData = localStorage.getItem(
        LOCAL_STORAGE_KEYS.VERIFICATION_NOTE,
      );
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setImageUrl(parsedData.imageUrl);
        setCompletePicName(parsedData.completePicName);
        setNote(parsedData.note);
        setCompleteLink(parsedData.completeLink);
        setCompleteId(parsedData.completeId);

        localStorage.removeItem(LOCAL_STORAGE_KEYS.VERIFICATION_NOTE);
        setIsSaved(false);
        notify('success', TOAST_MESSAGES.LOAD_SUCCESS, 3000);
      }
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return {
    note,
    isSaved,
    isModalOpen,
    confirmationMode,
    handleClick,
    handleCloseModal,
    handleConfirm,
    handleCancel,
  };
};
