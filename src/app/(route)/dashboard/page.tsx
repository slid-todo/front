import { Header } from '@/components/common/Header';
import { GoalList } from '@/components/Dashboard/GoalList';
import { MyProgress } from '@/components/Dashboard/MyProgress';

import { Follwer } from '@/components/Dashboard/Follwer';
import { RecentTodos } from '@/components/Dashboard/RecentTodos';

export default function DashBoardPage() {
  return (
    <>
      <Header title="대시보드" />
      <div className="flex min-h-screen w-screen flex-col gap-16 overflow-y-scroll bg-custom-white-100 px-16 pb-16 pt-48">
        <Follwer />
        <div className="-ml-16 h-6 w-screen bg-custom-white-200" />
        <RecentTodos />
        <MyProgress />
        <GoalList />
      </div>
    </>
  );
}
