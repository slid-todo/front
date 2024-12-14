import { useState } from 'react';
import { ModalContainer } from '../common/ModalContainer';

interface SelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (inputValue: string) => void;
}

export const SelectionModal = ({
  isOpen,
  onClose,
  onConfirm,
}: SelectionModalProps) => {
  const [inputValue, setInputValue] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm(inputValue);
    onClose();
  };

  return (
    <ModalContainer onClose={onClose}>
      <div className="flex flex-col gap-4 rounded bg-white p-6 shadow-md">
        <h2 className="text-lg font-semibold">텍스트를 입력해주세요</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="rounded border border-gray-300 px-3 py-2"
          placeholder="여기에 입력"
        />
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded bg-gray-300 px-4 py-2 transition-colors hover:bg-gray-400"
          >
            취소
          </button>
          <button
            onClick={handleConfirm}
            className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
          >
            확인
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};
