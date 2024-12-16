import { cn } from '@/utils/className';

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  const skeletonClass = cn(
    'bg-custom-white-300 animate-pulse w-full h-30',
    className,
  );

  return <div className={skeletonClass} />;
};
