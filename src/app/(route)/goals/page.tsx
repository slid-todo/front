import { Header } from '@/components/common/Header';
import { GoalList } from '@/components/Goals/GoalList';

export default function GoalsPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen w-screen flex-col gap-16 bg-custom-white-100 px-16 pb-16 pt-48">
        <h1 className="pl-4 pt-16 text-xl-bold">목표</h1>
        <GoalList />
      </div>
    </>
  );
}
