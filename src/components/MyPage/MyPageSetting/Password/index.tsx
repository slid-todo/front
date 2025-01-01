import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { ChangePassword } from './ChangePassword';

export const Password = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex items-center justify-between py-16"
        onClick={handleDropdown}
      >
        <span className="cursor-pointer text-sm-normal">비밀번호 변경</span>
        <FaAngleDown
          className={`size-14 cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      {isOpen && <ChangePassword isOpen={isOpen} />}
    </>
  );
};
