import { UserProfileContent } from '@/components/UserProfile/UserProfileContent';
import { UserProfileHeader } from '@/components/UserProfile/UserProfileHeader';

interface UserProfileProps {
  params: {
    userId: string;
  };
}

export default async function userProfile({ params }: UserProfileProps) {
  const { userId } = await params;

  return (
    <div className="flex min-h-screen w-screen flex-col gap-16 bg-custom-white-100 p-16 md:px-200 xl:px-400 2xl:px-650">
      <UserProfileHeader userId={userId} />
      <UserProfileContent />
    </div>
  );
}
