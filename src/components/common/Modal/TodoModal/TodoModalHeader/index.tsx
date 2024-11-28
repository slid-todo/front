'use client';
import { IoMdClose } from 'react-icons/io';

interface TodoModalHeaderProps {
  onClose: () => void;
}

export const TodoModalHeader = ({ onClose }: TodoModalHeaderProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-lg-bold text-slate-800">할 일 생성</span>
      <IoMdClose size={24} className="cursor-pointer" onClick={handleClose} />
    </div>
  );
};
