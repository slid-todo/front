import { ProgressCircle } from '@/components/Dashboard/MyProgress/ProgressCircle';

export interface MyProgressProps {
  progressPercent: number;
}

export const MyProgress = ({ progressPercent }: MyProgressProps) => {
  return (
    <>
      <p className="text-xl-semibold">내 진행 상황</p>
      <div className="flex-center relative py-16">
        <ProgressCircle progressPercent={progressPercent} />
        <p className="absolute text-3xl-bold text-primary-100">
          {progressPercent} <span className="pb-4 text-base-medium">%</span>
        </p>
      </div>
    </>
  );
};
