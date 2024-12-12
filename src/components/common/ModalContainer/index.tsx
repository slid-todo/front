import { ReactNode } from 'react';

interface ModalContainerProps {
  children: ReactNode;
  onClose: () => void;
}

export const ModalContainer = ({ children, onClose }: ModalContainerProps) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="flex-center fixed inset-0 z-50 bg-black/80"
      onClick={handleBackgroundClick}
    >
      {children}
    </div>
  );
};
