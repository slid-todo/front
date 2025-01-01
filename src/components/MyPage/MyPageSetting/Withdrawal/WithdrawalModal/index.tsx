import { Button } from '@/components/common/Button/Button';
import { ModalContent } from '@/components/common/Modal';
import { useWithdrawal } from '@/hooks/apis/Auth/useWithdrawal';

interface WithdrawalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WithdrawalModal = ({ isOpen, onClose }: WithdrawalModalProps) => {
  const { mutate: withdrawal } = useWithdrawal();

  return (
    <ModalContent isOpen={isOpen} onClose={onClose}>
      <h2 className="text-base-medium text-error">
        회원탈퇴
        <span className="text-slate-800">를 하시겠습니까</span>
      </h2>

      <div className="mb-10 mt-32 flex w-full gap-8 px-16">
        <Button size="small" className="w-full" onClick={() => withdrawal()}>
          네
        </Button>
        <Button size="small" className="w-full" onClick={onClose}>
          아니오
        </Button>
      </div>
    </ModalContent>
  );
};
