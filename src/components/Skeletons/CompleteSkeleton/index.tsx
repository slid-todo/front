import { Skeleton } from '@/components/common/Skeleton';

export const CompleteSkeleton = () => {
  return (
    <div className="w-full flex-col gap-16 pb-24">
      <div className="flex h-40 items-center gap-8 px-16">
        <Skeleton className="size-40 rounded-full" />
        <div>
          <Skeleton className="h-20 w-36 rounded-16" />
        </div>
        <Skeleton className="h-16 w-30 rounded-16" />
      </div>

      <Skeleton className="my-8 h-400" />
    </div>
  );
};
