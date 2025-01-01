import { Skeleton } from '@/components/common/Skeleton';

export const GoalListSkeleon = () => {
  return (
    <div className="flex flex-col gap-16">
      <Skeleton className="h-200 rounded-12" />
      <Skeleton className="h-160 rounded-12" />
      <Skeleton className="h-160 rounded-12" />
    </div>
  );
};
