'use client';

import { useState } from 'react';

import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';
import { ProgressCircle } from '@/components/Dashboard/MyProgress/ProgressCircle';
import { ProgressNumber } from '@/components/Dashboard/MyProgress/ProgressNumber';

export const MyProgress = () => {
  const [progressPercent] = useState(0);

  return (
    <DashboardItemContainer title="내 진행 상황">
      <div className="flex-center relative py-16">
        <ProgressCircle progressPercent={progressPercent} />
        <ProgressNumber progressPercent={progressPercent} />
      </div>
    </DashboardItemContainer>
  );
};
