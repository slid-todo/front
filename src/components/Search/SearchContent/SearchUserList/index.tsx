import { AxiosError } from 'axios';
import Image from 'next/image';
import { SearchResponseData } from '@/hooks/apis/Search/useSearchQuery';

interface SearchUserListProps {
  isError: boolean;
  error: AxiosError | null;
  searchData: { data: SearchResponseData[] } | undefined;
  keyword: string;
}

export const SearchUserList = ({
  isError,
  error,
  searchData,
  keyword,
}: SearchUserListProps) => {
  return (
    <ul className="flex flex-col gap-16">
      {isError ? (
        <div className="text-center text-error">
          {keyword ? `'${keyword}' ${error?.message}` : error?.message}
        </div>
      ) : (
        searchData?.data.map((item: SearchResponseData) => (
          <li className="flex w-full items-center gap-8" key={item.userId}>
            <Image
              width={48}
              height={48}
              className="flex size-48 rounded-90"
              src={item.profilePic}
              alt="프로필 사진"
            />
            <span className="text-base-medium">{item.name}</span>
          </li>
        ))
      )}
    </ul>
  );
};
