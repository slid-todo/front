'use client';

import { ReactNode } from 'react';

interface ModalContainerProps {
  children: ReactNode;
  onClose: () => void;
}

export const ModalContainer = ({ children, onClose }: ModalContainerProps) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 배경 클릭 시 onClose 호출
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={handleBackgroundClick}
    >
      {children}
    </div>
  );
};
