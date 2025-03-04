import { Suspense } from 'react';

import { cookies } from 'next/headers';

import { Header } from '@/components/common/Header';
import { PageContainer } from '@/components/common/PageContainer';
import { Follower } from '@/components/Dashboard/Follower';
import { GoalList } from '@/components/Dashboard/GoalList';
import { MyProgress } from '@/components/Dashboard/MyProgress';
import { RecentTodos } from '@/components/Dashboard/RecentTodos';
import { TodoListSkeleton } from '@/components/Skeletons/TodoListSkeleton';
import { recentTodosOptions } from '@/hooks/apis/Dashboard/useRecentTodosQuery';
import { todayProgressOptions } from '@/hooks/apis/Dashboard/useTodayProgressQuery';
import { ServerFetchBoundary } from '@/lib/query/ServerFetchBoundary';

export default async function DashBoardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || '';
  const serverFetchOptions = [
    todayProgressOptions(token),
    recentTodosOptions(token),
  ];

  return (
    <>
      <Header title="대시보드" />
      <PageContainer>
        <Follower />
        <Suspense fallback={<TodoListSkeleton />}>
          <ServerFetchBoundary fetchOptions={serverFetchOptions}>
            <RecentTodos />
            <MyProgress />
          </ServerFetchBoundary>
        </Suspense>
        <GoalList />
      </PageContainer>
    </>
  );
}
