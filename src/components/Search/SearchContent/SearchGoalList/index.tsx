import { AxiosError } from 'axios';
import Image from 'next/image';
import { FaFlag } from 'react-icons/fa6';
import { Goal } from '@/types/Goals';
import { SearchResponseData } from '@/hooks/apis/Search/useSearchQuery';

interface SearchGoalListProps {
  isError: boolean;
  error: AxiosError | null;
  searchData: { data: SearchResponseData[] } | undefined;
  keyword: string;
}

export const SearchGoalList = ({
  isError,
  error,
  searchData,
  keyword,
}: SearchGoalListProps) => {
  return (
    <ul className="flex flex-col gap-16">
      {isError ? (
        <div className="text-center text-error">
          {keyword ? `'${keyword}' ${error?.message}` : error?.message}
        </div>
      ) : (
        searchData?.data.map((item: SearchResponseData) => (
          <li className="flex w-full flex-col" key={item.userId}>
            <div className="flex w-full items-center gap-8">
              <Image
                width={48}
                height={48}
                className="flex size-48 rounded-90"
                src={item.profilePic}
                alt="프로필 사진"
              />
              <span className="text-base-medium">{item.name}</span>
            </div>
            {item.goals.map((item: Goal) => (
              <div
                className="flex items-start gap-8 py-16 pl-48 pr-16"
                key={item.goalId}
              >
                <FaFlag className="size-18" style={{ fill: item.color }} />
                <span className="text-base-medium">{item.goalTitle}</span>
              </div>
            ))}
          </li>
        ))
      )}
    </ul>
  );
};
