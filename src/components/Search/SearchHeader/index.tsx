import { IoMdClose } from 'react-icons/io';

export const SearchHeader = () => {
  return (
    <div className="flex items-center gap-16">
      <IoMdClose className="size-24 cursor-pointer" />
      <span className="text-xl-semibold">검색하기</span>
    </div>
  );
};
