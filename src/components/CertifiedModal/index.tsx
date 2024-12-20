'use client';

import { ModalContent } from '../common/Modal';
import { VerificationNote } from '../VerificationNote/VerificationNoteContainer';

interface CertifiedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertifiedModal = (props: CertifiedModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <ModalContent isOpen={isOpen} onClose={onClose}>
      <VerificationNote />
    </ModalContent>
  );
};
