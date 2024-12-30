import { Skeleton } from '@/components/common/Skeleton';

export const TodoListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="flex h-72">
          <Skeleton className="my-8 size-56 rounded-16" />
          <div className="ml-16 flex h-72 flex-col items-start justify-center gap-10">
            <Skeleton className="h-12 w-40 rounded-16" />
            <Skeleton className="h-20 w-120 rounded-16" />
          </div>
        </div>
      ))}
    </>
  );
};
