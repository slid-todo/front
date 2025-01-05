import { Skeleton } from '@/components/common/Skeleton';

export const FollowStorySkeleton = () => {
  return (
    <div className="flex items-center gap-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index}>
          <Skeleton className="size-120 rounded-20" />
          <div className="ml-4 mt-15 flex items-center gap-8">
            <Skeleton className="h-14 w-70 rounded-12" />
            <Skeleton className="h-14 w-35 rounded-12" />
          </div>
        </div>
      ))}
    </div>
  );
};
