import { Skeleton } from '@/components/common/Skeleton';

export const FollowsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index} className="w-screen flex-col gap-16 pb-24">
          <div className="flex h-40 items-center gap-8 px-16">
            <Skeleton className="size-40 rounded-full" />
            <div>
              <Skeleton className="h-20 w-36 rounded-16" />
            </div>
            <Skeleton className="h-16 w-30 rounded-16" />
          </div>

          <Skeleton className="my-8 h-400" />

          <div className="my-12 flex gap-16">
            <div className="flex items-center">
              <div className="ml-16 mr-12">
                <Skeleton className="size-36 rounded-full" />
              </div>
              <Skeleton className="h-20 w-16 rounded-16" />

              <div className="ml-16 mr-12">
                <Skeleton className="size-36 rounded-full" />
              </div>
              <Skeleton className="h-20 w-16 rounded-16" />
            </div>
          </div>

          <Skeleton className="mx-16 my-8 h-20 w-400 rounded-16" />
        </div>
      ))}
    </>
  );
};
