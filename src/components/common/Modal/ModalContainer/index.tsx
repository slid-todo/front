import { ReactNode } from 'react';
import { useTodoModalStore } from '@/store/useTodoModalStore';

interface ModalContainerProps {
  children: ReactNode;
}

export const ModalContainer = ({ children }: ModalContainerProps) => {
  const { close } = useTodoModalStore();

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 배경 클릭 시 onClose 호출
    if (e.target === e.currentTarget) {
      close();
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
