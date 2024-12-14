'use client';

import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { ProgressCircle } from '@/components/Dashboard/MyProgress/ProgressCircle';
import { ProgressNumber } from '@/components/Dashboard/MyProgress/ProgressNumber';
import { useTodayProgress } from '@/hooks/apis/Dashboard/useTodayProgressQuery';

export const MyProgress = () => {
  const { progress } = useTodayProgress();

  return (
    <DashboardItemContainer title="내 진행 상황">
      <div className="flex-center relative py-16">
        <ProgressCircle progressPercent={progress} />
        <ProgressNumber progressPercent={progress} />
      </div>
    </DashboardItemContainer>
  );
};
