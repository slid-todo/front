import { FaFlag, FaPlus } from 'react-icons/fa6';

interface GaolItemProps {
  name: string;
}

export const GoalItem = ({ name }: GaolItemProps) => {
  return (
    <div className="relative w-full rounded-12 bg-white p-16">
      <span className="inline-flex items-center text-base-semibold">
        <FaFlag className="mr-4 size-24 p-2 text-sub-purple" />
        {name}
      </span>
      <button className="absolute right-16 top-16 flex text-primary-100">
        <FaPlus className="size-24 p-4" />
        할일 추가
      </button>

      {/* progress bar */}
      <div className="mt-8 flex w-full items-center gap-8 p-2">
        <div className="h-12 w-full rounded-full bg-custom-white-200">
          <div className="h-12 w-200 rounded-full bg-primary-100" />
        </div>
        <p className="text-sm-semibold">64%</p>
      </div>

      {/* 사진 */}
      <div>
        <div className="mt-8">
          <p className="text-base-semibold">모의고사 풀기</p>
          <p className="text-xs-semibold leading-6 text-custom-gray-100">
            매일 반복
          </p>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-x-4 gap-y-8">
          {Array.from({ length: 11 }).map((_, index) => (
            <div
              key={index}
              className="flex-center aspect-square rounded-16 bg-sub-purple"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
