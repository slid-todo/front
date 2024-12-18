import { Header } from '@/components/common/Header';
import { Follwer } from '@/components/Dashboard/Follwer';
import { GoalList } from '@/components/Dashboard/GoalList';
import { MyProgress } from '@/components/Dashboard/MyProgress';
import { RecentTodos } from '@/components/Dashboard/RecentTodos';

export default function DashBoardPage() {
  return (
    <>
      <Header title="대시보드" />
      <div className="flex min-h-screen w-screen flex-col gap-16 bg-custom-white-100 px-16 pb-16 pt-48">
        <Follwer />
        <RecentTodos />
        <MyProgress />
        <GoalList />
      </div>
    </>
  );
}
