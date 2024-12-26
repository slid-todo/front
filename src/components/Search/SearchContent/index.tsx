'use client';

import Image from 'next/image';
import { FaFlag } from 'react-icons/fa6';
import { useSearchStore } from '@/store/useSearchStore';
import { Goal } from '@/types/Goals';

const users = [
  {
    profilePic:
      'https://slid-todo.s3.ap-northeast-2.amazonaws.com/a19c4793-d33b-4be6-9f65-097bed5a6709_testmouse1.png',
    name: '닉네임1',
  },
  {
    profilePic:
      'https://slid-todo.s3.ap-northeast-2.amazonaws.com/a19c4793-d33b-4be6-9f65-097bed5a6709_testmouse1.png',
    name: '닉네임2',
  },
  {
    profilePic:
      'https://slid-todo.s3.ap-northeast-2.amazonaws.com/a19c4793-d33b-4be6-9f65-097bed5a6709_testmouse1.png',
    name: '닉네임3',
  },
  {
    profilePic:
      'https://slid-todo.s3.ap-northeast-2.amazonaws.com/a19c4793-d33b-4be6-9f65-097bed5a6709_testmouse1.png',
    name: '닉네임4',
  },
  {
    profilePic:
      'https://slid-todo.s3.ap-northeast-2.amazonaws.com/a19c4793-d33b-4be6-9f65-097bed5a6709_testmouse1.png',
    name: '닉네임5',
  },
];

const userGoals = [
  {
    profilePic:
      'https://slid-todo.s3.ap-northeast-2.amazonaws.com/a19c4793-d33b-4be6-9f65-097bed5a6709_testmouse1.png',
    name: '닉네임1',
    goals: [
      {
        goalId: 1,
        goalTitle: '목표 1',
        color: 'orange',
        createdAt: '',
      },
      {
        goalId: 2,
        goalTitle: '목표 2',
        color: 'purple',
        createdAt: '',
      },
    ],
  },
  {
    profilePic:
      'https://slid-todo.s3.ap-northeast-2.amazonaws.com/a19c4793-d33b-4be6-9f65-097bed5a6709_testmouse1.png',
    name: '닉네임2',
    goals: [
      {
        goalId: 1,
        goalTitle: '목표 1',
        color: 'orange',
        createdAt: '',
      },
      {
        goalId: 2,
        goalTitle: '목표 2',
        color: 'purple',
        createdAt: '',
      },
    ],
  },
];

interface Users {
  profilePic: string;
  name: string;
}

interface UserGoals {
  profilePic: string;
  name: string;
  goals: Goal[];
}

export const SearchContent = () => {
  const { searchFilter } = useSearchStore();

  return (
    <div>
      {searchFilter === '유저명' ? (
        <ul className="flex flex-col gap-16">
          {users.map((item: Users) => (
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
          {userGoals.map((item: UserGoals) => (
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
