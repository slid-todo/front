import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa6';
import { TodoModalProps } from '@/types/TodoType';
import { cn } from '@/utils/className';

export const TodoModalHeader = ({ todoType, onClose }: TodoModalProps) => {
  const [isChkClick, setIstChkClick] = useState(false);

  const iconContainerClass = cn(
    'flex size-18 items-start justify-center rounded-6 border border-slate-200',
    isChkClick ? 'bg-blue-600' : 'bg-white',
  );

  const handleClose = () => {
    onClose?.();
  };

  const handleClick = () => {
    setIstChkClick(!isChkClick);
  };

  return (
    <div className="flex flex-col gap-8 self-stretch">
      <div className="flex items-center justify-between">
        <span className="text-lg-bold text-slate-800">
          {todoType === '생성' ? '할 일 생성' : '할 일 수정'}
        </span>
        <IoMdClose className="size-24 cursor-pointer" onClick={handleClose} />
      </div>
      {todoType === '생성' ? (
        <></>
      ) : (
        <div className="flex items-center gap-6">
          <button className={iconContainerClass} onClick={handleClick}>
            {isChkClick ? <FaCheck className="size-16 text-white" /> : <></>}
          </button>

          <span className="text-base-semibold text-slate-600">Done</span>
        </div>
      )}
    </div>
  );
};
