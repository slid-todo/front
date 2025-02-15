import { Header } from '@/components/common/Header';
import { PageContainer } from '@/components/common/PageContainer';
import { Follower } from '@/components/Dashboard/Follower';
import { GoalList } from '@/components/Dashboard/GoalList';
import { MyProgress } from '@/components/Dashboard/MyProgress';
import { RecentTodos } from '@/components/Dashboard/RecentTodos';

export default function DashBoardPage() {
  return (
    <>
      <Header title="대시보드" />
      <PageContainer>
        <Follower />
        <RecentTodos />
        <MyProgress />
        <GoalList />
      </PageContainer>
    </>
  );
}
