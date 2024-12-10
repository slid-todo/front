import { FaAngleRight } from 'react-icons/fa6';
import { Header } from '@/components/common/Header';
import { GoalList } from '@/components/Dashboard/GoalList';
import { MyProgress } from '@/components/Dashboard/MyProgress';
import { GOALS } from '@/constants/DashboardMockData';

export default function DashBoardPage() {
  return (
    <>
      <Header title="대시보드" />
      <div className="flex min-h-screen w-screen flex-col gap-16 overflow-y-scroll bg-custom-white-100 px-16 pb-16 pt-48">
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

        <MyProgress progressPercent={74} />
        <GoalList goals={GOALS} />
      </div>
    </>
  );
}
