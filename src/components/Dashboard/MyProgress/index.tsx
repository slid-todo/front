import { ProgressCircle } from '@/components/Dashboard/MyProgress/ProgressCircle';
import { ProgressNumber } from '@/components/Dashboard/MyProgress/ProgressNumber';

export interface MyProgressProps {
  progressPercent: number;
}

export const MyProgress = ({ progressPercent }: MyProgressProps) => {
  return (
    <>
      <p className="text-xl-semibold">내 진행 상황</p>
      <div className="flex-center relative py-16">
        <ProgressCircle progressPercent={progressPercent} />
        <ProgressNumber progressPercent={progressPercent} />
      </div>
    </>
  );
};
