'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { cn } from '@/utils/className';

interface CommentOptionsProps {
  isEditing: boolean;
  onSave: () => void;
  onCancel: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const CommentOptions = (props: CommentOptionsProps) => {
  const { isEditing, onSave, onCancel, onEdit, onDelete } = props;

  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonBaseClasses = 'w-full px-16 py-8 text-center hover:text-sm-bold';

  return (
    <div ref={optionsRef} className="relative">
      <FaEllipsisVertical
        className="cursor-pointer text-gray-600"
        onClick={toggleOptions}
      />
      <AnimatePresence>
        {showOptions && (
          <motion.div
            className="absolute right-0 z-10  mx-16 my-8 flex min-w-100 flex-col rounded-12 bg-white text-sm-normal shadow-lg"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {isEditing ? (
              <>
                <button
                  onClick={() => {
                    onSave();
                    setShowOptions(false);
                  }}
                  className={cn(buttonBaseClasses, 'text-sub-blue')}
                >
                  저장하기
                </button>
                <button
                  onClick={() => {
                    onCancel();
                    setShowOptions(false);
                  }}
                  className={cn(buttonBaseClasses, 'text-slate-700')}
                >
                  취소하기
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    onEdit();
                    setShowOptions(false);
                  }}
                  className={cn(buttonBaseClasses, 'text-slate-700')}
                >
                  수정하기
                </button>
                <button
                  onClick={() => {
                    onDelete();
                    setShowOptions(false);
                  }}
                  className={cn(buttonBaseClasses, 'text-error')}
                >
                  삭제하기
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
