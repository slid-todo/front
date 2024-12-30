import { useState } from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { WithdrawalModal } from './WithdrawalModal';

export const Withdrawal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div
        className="flex items-center justify-between py-16"
        onClick={handleModalOpen}
      >
        <span className="cursor-pointer text-sm-normal">회원탈퇴</span>
        <FaTrashCan className="cursor-pointer" />
      </div>
      <WithdrawalModal isOpen={isOpenModal} onClose={handleModalClose} />
    </>
  );
};
