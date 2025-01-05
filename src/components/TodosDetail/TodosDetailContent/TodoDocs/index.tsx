import Image from 'next/image';
import { FaLink } from 'react-icons/fa';

interface TodoDocsProps {
  todoLink: string | undefined;
  todoPic: string | undefined;
}

export const TodoDocs = ({ todoLink, todoPic }: TodoDocsProps) => {
  return (
    <div className="flex flex-col gap-8">
      {(todoPic || todoLink) && (
        <span className="text-sm-semibold">첨부된 자료</span>
      )}
      {todoPic && !todoLink && (
        <Image
          width={340}
          height={340}
          sizes="100vw"
          className="h-340 w-full rounded-16 object-cover"
          priority
          src={todoPic}
          alt="프로필 사진"
        />
      )}
      {!todoPic && todoLink && (
        <div className="flex items-center gap-8 rounded-8 bg-custom-white-200 p-12">
          <FaLink className="size-24 shrink-0 cursor-pointer text-primary-100" />
          <span className="truncate text-sm-normal text-custom-gray-100">
            {todoLink}
          </span>
        </div>
      )}
    </div>
  );
};
