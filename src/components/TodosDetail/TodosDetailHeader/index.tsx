'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { FaEllipsisVertical } from 'react-icons/fa6';

export const TodosDetailHeader = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-16">
        <IoMdClose className="size-24 cursor-pointer" onClick={handleBack} />
        <span className="text-xl-semibold">할 일 상세보기</span>
      </div>
      <FaEllipsisVertical className="size-24 p-2 text-custom-gray-100" />
    </div>
  );
};
