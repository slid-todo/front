import { Button } from '@/components/common/Button/Button';
import { Header } from '@/components/common/Header';
import { GoalList } from '@/components/Goals/GoalList';

export default function GoalsPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen w-screen flex-col gap-16 bg-custom-white-100 px-16 pb-16 pt-48">
        <div className="flex items-center justify-between py-8">
          <h1 className="text-xl-semibold">목표</h1>
          <Button size="small">편집하기</Button>
        </div>
        <GoalList />
      </div>
    </>
  );
}
