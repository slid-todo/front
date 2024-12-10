import { IoMdClose } from 'react-icons/io';
import { FaLink } from 'react-icons/fa';
import { IoReload } from 'react-icons/io5';
import { Button } from '../common/Button/Button';
import { Input } from '../common/Input';

export const VerificationNote = () => {
  return (
    <div className="flex size-full flex-col gap-24 bg-custom-white-100">
      {/* 1st content */}
      <div className="flex-center w-full flex-col gap-24 px-16 pt-8">
        {/* header */}
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center gap-16">
            <IoMdClose className="size-24 cursor-pointer" />
            <span className="text-xl-semibold">할 일 상세보기 </span>
          </div>
          <Button className="h-36" size="small" radius={false}>
            작성완료
          </Button>
        </div>
        {/* header */}
        {/* image */}
        <div className="relative flex size-240">
          <div className="size-full rounded-16 bg-fuchsia-400" />
          <button className="flex-center absolute bottom-8 right-8 cursor-pointer gap-4 rounded-170 bg-white px-10 py-6 text-sm-semibold text-primary-200 hover:bg-custom-white-200">
            <IoReload />
            <span>재촬영</span>
          </button>
        </div>
        {/* image */}
        {/* textarea */}
        <textarea
          className="h-60 w-full resize-none bg-custom-white-100 outline-none scrollbar-hide"
          placeholder="이 할 일은 어땠나요?"
        />
        {/* textarea */}
      </div>
      {/* 2nd content */}
      <hr className="h-6 w-full bg-custom-white-200" />
      {/* 3rd content */}
      <div className="flex w-full flex-col gap-24 px-16">
        <div className="flex flex-col items-start gap-12 self-stretch">
          <span className="text-base-semibold">목표</span>
          <Input value={'토익 700점 달성'} readOnly />
        </div>
        <div className="flex flex-col items-start gap-12 self-stretch">
          <span className="text-base-semibold">할 일</span>
          <Input value={'[매일] 모의고사 풀기'} readOnly />
        </div>
      </div>
      {/* 4th content */}
      <div className="mt-auto flex w-full items-center justify-between bg-custom-white-200 p-16">
        <div className="flex items-center gap-8">
          <FaLink className="size-24 text-primary-100" />
          <span className="text-sm-medium text-primary-100">임베드</span>
        </div>
        <div className="flex items-center gap-16">
          <span className="text-xs-medium text-custom-gray-300">0/100</span>
          <span className="text-sm-medium text-primary-100">임시저장</span>
        </div>
      </div>
    </div>
  );
};
