'use client';
import { useState } from 'react';
import TodoModal from '@/components/common/Modal/TodoModal';

export default function GiBeom() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={handleOpen}>열어</button>
      {isOpen ? <TodoModal onClose={handleClose} /> : <></>}
    </div>
  );
}
