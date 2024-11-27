import { ReactNode } from 'react';

interface ModalContainerProps {
  children: ReactNode;
}

const ModalContainer = ({ children }: ModalContainerProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {children}
    </div>
  );
};

export default ModalContainer;
