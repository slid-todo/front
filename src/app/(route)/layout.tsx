import { ReactNode, Suspense } from 'react';

import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';

import { goalsOptions } from '@/hooks/apis/useGoalsQuery';
import { ServerFetchBoundary } from '@/lib/query/ServerFetchBoundary';

const Sidebar = dynamic(() => import('@/components/Sidebar'));

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || '';
  const serverFetchOptions = [goalsOptions(token)];

  return (
    <div className="flex">
      <Suspense fallback={<>로딩중</>}>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <Sidebar />
        </ServerFetchBoundary>
      </Suspense>
      {children}
    </div>
  );
}
