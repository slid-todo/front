import { PageContainer } from '@/components/common/PageContainer';
import { UserProfileContent } from '@/components/UserProfile/UserProfileContent';
import { UserProfileHeader } from '@/components/UserProfile/UserProfileHeader';

interface UserProfileProps {
  userId: string;
}

export default async function userProfile({
  params,
}: {
  params: Promise<UserProfileProps>;
}) {
  const { userId } = await params;

  return (
    <PageContainer>
      <UserProfileHeader userId={userId} />
      <UserProfileContent userId={userId} />
    </PageContainer>
  );
}
