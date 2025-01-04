interface CompletePageProps {
  completeId: string;
}

export default async function CompletePage({
  params,
}: {
  params: Promise<CompletePageProps>;
}) {
  const { completeId } = await params;
  return (
    <div className="flex min-h-screen w-screen flex-col gap-16 bg-custom-white-100 p-16 md:px-200 xl:px-400 2xl:px-650">
      {completeId}
    </div>
  );
}
