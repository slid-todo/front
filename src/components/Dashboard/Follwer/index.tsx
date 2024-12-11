import { Card } from '@/components/common/Card';
import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';

export const Follwer = () => {
  return (
    <DashboardItemContainer
      title="팔로워 현황"
      className="relative mb-22 mt-16"
    >
      <Card>
        <p className="text-sm-normal text-custom-gray-100">
          찍찍이들 팔로우 하고 인증 보기
        </p>
      </Card>
      <div className="absolute -bottom-22 -left-16 h-6 w-[calc(100%+32px)] bg-custom-white-200" />
    </DashboardItemContainer>
  );
};
