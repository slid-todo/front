import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { cookies } from 'next/headers';
import { PageContainer } from '@/components/common/PageContainer';
import { UserProfileContent } from '@/components/UserProfile/UserProfileContent';
import { UserProfileHeader } from '@/components/UserProfile/UserProfileHeader';
import { QUERY_KEYS } from '@/constants/QueryKeys';
import { getUserProfile } from '@/apis/UserProfile/getUserProfile';

interface UserProfileProps {
  userId: string;
}

export default async function userProfile({
  params,
}: {
  params: Promise<UserProfileProps>;
}) {
  const { userId } = await params;

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || '';

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.USER_PROFILE, Number(userId)],
    queryFn: () => getUserProfile(Number(userId), token),
  });

  return (
    <PageContainer>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <UserProfileHeader userId={userId} />
        <UserProfileContent userId={userId} />
      </HydrationBoundary>
    </PageContainer>
  );
}
