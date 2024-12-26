'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';

export const SearchHeader = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center gap-16">
      <IoMdClose className="size-24 cursor-pointer" onClick={handleBack} />
      <span className="text-xl-semibold">검색하기</span>
    </div>
  );
};
