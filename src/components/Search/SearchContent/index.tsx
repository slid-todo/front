'use client';

import Image from 'next/image';
import { FaFlag } from 'react-icons/fa6';
import { useSearchStore } from '@/store/useSearchStore';
import { Goal } from '@/types/Goals';
import {
  SearchResponseData,
  useSearchQuery,
} from '@/hooks/apis/Search/useSearchQuery';

export const SearchContent = () => {
  const { searchFilter, searchKeyword } = useSearchStore();
  const { data: searchData } = useSearchQuery({
    searchField: searchFilter,
    keyword: searchKeyword,
  });

  return (
    <div>
      {searchFilter === '유저명' ? (
        <ul className="flex flex-col gap-16">
          {searchData?.data.map((item: SearchResponseData) => (
            <li className="flex w-full items-center gap-8" key={item.name}>
              <Image
                width={48}
                height={48}
                className="flex size-48 rounded-90"
                src={item.profilePic}
                alt="프로필 사진"
              />
              <span className="text-base-medium">{item.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-col gap-16">
          {searchData?.data.map((item: SearchResponseData) => (
            <li className="flex w-full flex-col" key={item.name}>
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
          ))}
        </ul>
      )}
    </div>
  );
};
