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
    <div className="flex min-h-screen w-screen flex-col gap-16 bg-custom-white-100 py-16 md:px-200 xl:px-400 2xl:px-650">
      <CompleteHeader />

      <CompletePost completeId={completeId} />

      <div className="h-6 bg-custom-white-200" />

      <CompleteComments completeId={completeId} />
    </div>
  );
}
