import { PageContainer } from '@/components/common/PageContainer';
import { CompleteComments } from '@/components/Complete/Comments';
import { CompleteHeader } from '@/components/Complete/CompleteHeader';
import { CompletePost } from '@/components/Complete/Post';

interface CompletePageProps {
  completeId: number;
}

export default async function CompletePage({
  params,
}: {
  params: Promise<CompletePageProps>;
}) {
  const { completeId } = await params;

  return (
    <PageContainer header={false} className="!px-0">
      <CompleteHeader />
      <CompletePost completeId={completeId} />

      <div className="h-6 bg-custom-white-200" />

      <CompleteComments completeId={completeId} />
    </PageContainer>
  );
}
