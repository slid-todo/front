import { Header } from '@/components/common/Header';
import { PageContainer } from '@/components/common/PageContainer';
import { GoalList } from '@/components/Goals/GoalList';

export default function GoalsPage() {
  return (
    <>
      <Header />
      <PageContainer>
        <h1 className="pl-4 pt-16 text-xl-semibold">목표</h1>
        <GoalList />
      </PageContainer>
    </>
  );
}
