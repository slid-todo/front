import { FaEllipsisVertical, FaFlag } from 'react-icons/fa6';

import { Dropdown } from '@/components/common/Dropdown';
import { Input } from '@/components/common/Input';
import { ConfirmationModal } from '@/components/ConfirmationModal';
import { DROPDOWN } from '@/constants/dropdown';
import { useDeleteGoalMutation } from '@/hooks/apis/Goals/useDeleteGoalMutation';
import { useSelectGoalMenu } from '@/hooks/useSelectGoalMenu';

interface GoalHeaderProps {
  id: number;
  title: string;
  color: string;
}

export const GoalHeader = ({ id, title, color }: GoalHeaderProps) => {
  const {
    inputRef,
    editTitle,
    isEdit,
    isOpenTodoMoal,
    isOpenDeleteModal,
    handleKeyDown,
    handleBlur,
    handleChangeGoalTitle,
    handleOpenMenu,
    handleCloseMenu,
    handleSelectItem,
    handleCloseConfirmationModal,
  } = useSelectGoalMenu({ id, title });

  const { mutate: deleteGoalMutation } = useDeleteGoalMutation();

  const renderDropdownItem = (item: { value: string }) => {
    return <span>{item.value}</span>;
  };

  return (
    <>
      <span className="inline-flex items-center text-base-semibold">
        <FaFlag className="mr-4 size-24 p-2" style={{ fill: color }} />
        {isEdit ? (
          <Input
            ref={inputRef}
            value={editTitle}
            onChange={handleChangeGoalTitle}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            className="bg-custom-white-100 px-12 py-4 text-base-semibold"
          />
        ) : (
          title
        )}
      </span>
      <button
        onBlur={handleCloseMenu}
        onClick={handleOpenMenu}
        aria-label="Open goal menu"
        className="absolute right-16 top-16 flex items-center text-primary-100"
      >
        <FaEllipsisVertical
          aria-hidden="true"
          className="size-24 p-2 text-custom-gray-100"
        />
      </button>
      <div className="absolute right-16 top-44 w-81">
        <Dropdown
          dropdownData={DROPDOWN.GOAL_HEADER_MENU}
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
