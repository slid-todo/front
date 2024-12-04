import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';
import { AuthInputProps } from '@/types/AuthType';
import { nameValidation } from '@/utils/authValidation';

export const NameInput = ({ register, error }: AuthInputProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-12">
      <span className="text-base-semibold text-slate-800 ">이름</span>
      <Input
        type="text"
        placeholder={PLACEHOLDERS.NAME}
        {...register('name', nameValidation)}
      />
      {error && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
  );
};
