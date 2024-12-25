import { Button } from '../common/Button/Button';
import { ModalContent } from '../common/Modal';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
}

export const ConfirmationModal = (props: ConfirmationModalProps) => {
  const {
    isOpen,
    onClose,
    onConfirm,
    onCancel,
    title = '제목',
    description = '이 작업을 진행하시겠습니까?',
    confirmText = '예',
    cancelText = '아니오',
  } = props;

  return (
    <ModalContent isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center px-24">
        <h1 className="mb-16 text-xl font-bold">{title}</h1>

        <p className="mb-24">{description}</p>

        <div className="flex w-full justify-between gap-10">
          <Button size="medium" className="w-120 px-12" onClick={onConfirm}>
            {confirmText}
          </Button>
          <Button size="medium" className="w-120 px-12" onClick={onCancel}>
            {cancelText}
          </Button>
        </div>
      </div>
    </ModalContent>
  );
};
