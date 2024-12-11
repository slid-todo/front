import { FaAngleRight } from 'react-icons/fa6';

import { DashboardItemContainer } from '@/components/Dashboard/DashboardItemContainer';

export const RecentTodos = () => {
  return (
    <DashboardItemContainer title="최근 등록한 할일" className="relative">
      <button className="flex-center absolute right-0 top-0 text-sm-medium text-custom-gray-100">
        모두 보기 <FaAngleRight className="ml-8" />
      </button>
      <ul className="text-sm-normal">
        <li>
          <span>리스트 1</span>
        </li>
        <li>
          <span>리스트 2</span>
        </li>
        <li>
          <span>리스트 3</span>
        </li>
      </ul>
    </DashboardItemContainer>
  );
};
