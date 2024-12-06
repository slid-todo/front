'use client';

import { useState } from 'react';
import { FaAngleRight, FaPlus } from 'react-icons/fa6';
import { Header } from '@/components/common/Header';
import { ProgressCircle } from '@/components/Dashboard/ProgressCircle';

const GOALS = [
  {
    id: 1,
    name: '토익 700점 맞기',
  },
];

export default function DashBoardPage() {
  const [progress] = useState(74);

  return (
    <>
      <Header title="대시보드" />
      <div className="flex h-screen w-screen flex-col gap-16 bg-custom-white-100 px-16 pt-48">
        {/* 최근 등록 */}
        <div className="relative mt-16 w-full rounded-12 bg-white p-16">
          <p className="text-lg-semibold">최근 등록한 할 일</p>
          <button className="flex-center absolute right-16 top-16 text-sm-medium">
            모두 보기 <FaAngleRight className="ml-8" />
          </button>
          <ul className="text-sm-normal">
            <li>
              <span>리스트 1</span>
            </li>
            <li>
              <span>리스트 2</span>
            </li>
            <li>
              <span>리스트 3</span>
            </li>
          </ul>
        </div>

        {/* 진행 상황 */}
        <div className="flex w-full items-center rounded-12 bg-primary-100 p-16">
          <ProgressCircle progress={progress} />
          <p className="text-3xl-bold text-white">{progress} %</p>
        </div>

        {/* 목표 별 할 일 */}
        <div>
          <p className="text-xl-semibold">목표 별 할 일</p>
          {GOALS.map((goal) => (
            <div
              key={goal.id}
              className="relative mt-16 w-full rounded-12 bg-white p-16"
            >
              <span className="text-base-semibold">{goal.name}</span>
              <button className="absolute right-16 top-16 flex text-primary-100">
                <FaPlus className="size-24 p-4" />
                할일 추가
              </button>

              {/* progress bar */}
              <div className="mt-8 flex w-full items-center gap-8 p-2">
                <div className="h-4 w-full rounded-full bg-custom-white-200">
                  <div className="h-4 w-200 rounded-full bg-primary-100" />
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
          ))}
        </div>
      </div>
    </>
  );
}
