import Image from 'next/image';
import { FaLink } from 'react-icons/fa';

interface TodoDocsProps {
  todoLink: string;
  todoPic: string;
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
          className="w-full rounded-16"
          priority
          src="https://slid-todo.s3.ap-northeast-2.amazonaws.com/a19c4793-d33b-4be6-9f65-097bed5a6709_testmouse1.png"
          alt="프로필 사진"
        />
      )}
      {!todoPic && todoLink && (
        <div className="flex items-center gap-8 rounded-8 bg-custom-white-200 p-12">
          <FaLink className="size-24 shrink-0 cursor-pointer text-primary-100" />
          <span className="truncate text-sm-normal text-custom-gray-100">
            링크링크링크링크ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </span>
        </div>
      )}
    </div>
  );
};
