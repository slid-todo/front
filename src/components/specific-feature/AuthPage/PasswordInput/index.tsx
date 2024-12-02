import { useState } from 'react';
import { MdVisibilityOff, MdVisibility } from 'react-icons/md';
import { Input } from '@/components/common/Input';
import { PLACEHOLDERS } from '@/constants/Placeholders';

export const PasswordInput = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickIcon = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex w-full flex-col items-start gap-12">
      <span className="text-base-semibold text-slate-800 ">비밀번호</span>
      <div className="flex w-full items-center justify-between gap-10 pr-24">
        <Input
          type={isVisible ? 'text' : 'password'}
          placeholder={PLACEHOLDERS.PASSWORD}
        />
        {isVisible ? (
          <MdVisibility
            className="size-24 cursor-pointer"
            onClick={handleClickIcon}
          />
        ) : (
          <MdVisibilityOff
            className="size-24 cursor-pointer"
            onClick={handleClickIcon}
          />
        )}
      </div>
    </div>
  );
};
