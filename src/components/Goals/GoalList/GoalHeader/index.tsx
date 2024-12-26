import { FaEllipsisVertical, FaFlag } from 'react-icons/fa6';

import { Dropdown } from '@/components/common/Dropdown';
import { ConfirmationModal } from '@/components/ConfirmationModal';
import { useDeleteGoalMutation } from '@/hooks/apis/Goals/useDeleteGoalMutation';
import { useSelectGoalMenu } from '@/hooks/useSelectGoalMenu';

interface GoalHeaderProps {
  id: number;
  title: string;
  color: string;
}

export const GoalHeader = ({ id, title, color }: GoalHeaderProps) => {
  const {
    isOpenTodoMoal,
    isOpenDeleteModal,
    handleOpenMenu,
    handleCloseMenu,
    handleSelectItem,
    handleCloseConfirmationModal,
  } = useSelectGoalMenu({ id, title });

  const { mutate: deleteGoalMutation } = useDeleteGoalMutation();

  const renderDropdownItem = (item: { value: string }) => {
    return <span>{item.value} </span>;
  };

  const dropdownData = ['할일추가', '수정하기', '삭제하기'].map((str) => ({
    value: str,
  }));

  return (
    <>
      <span className="inline-flex items-center text-base-semibold">
        <FaFlag className="mr-4 size-24 p-2" style={{ fill: color }} />
        {title}
      </span>
      <button
        onBlur={handleCloseMenu}
        onClick={handleOpenMenu}
        className="absolute right-16 top-16 flex items-center text-primary-100"
      >
        <FaEllipsisVertical className="size-24 p-2 text-custom-gray-100" />
      </button>
      <div className="absolute right-16 top-44 w-81">
        <Dropdown
          dropdownData={dropdownData}
          onSelectItem={handleSelectItem}
          isOpenDropdown={isOpenTodoMoal}
          renderItem={renderDropdownItem}
        />
      </div>
      <ConfirmationModal
        isOpen={isOpenDeleteModal}
        onClose={handleCloseConfirmationModal}
        onConfirm={() => {
          deleteGoalMutation(id);
          handleCloseConfirmationModal();
        }}
        onCancel={handleCloseConfirmationModal}
        title={`${title} 삭제`}
        description="할 일 및 인증이 모두 삭제됩니다."
        confirmText="확인"
        cancelText="취소"
      />
    </>
  );
};
