import { Card } from '@/components/common/Card';
import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';

export const Follwer = () => {
  return (
    <DashboardItemContainer title="팔로워 현황" className="mt-16">
      <Card>
        <p className="text-sm-normal text-custom-gray-100">
          찍찍이들 팔로우 하고 인증 보기
        </p>
      </Card>
    </DashboardItemContainer>
  );
};
