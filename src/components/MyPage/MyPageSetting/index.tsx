'use client';

import { Logout } from './Logout';
import { Password } from './Password';
import { Withdrawal } from './Withdrawal';

export const MyPageSetting = () => {
  return (
    <div className="flex flex-col">
      <span className="flex pb-8 text-xl-semibold">설정</span>
      <Password />
      <hr className="h-2 w-full bg-custom-white-200" />
      <Logout />
      <hr className="h-2 w-full bg-custom-white-200" />
      <Withdrawal />
    </div>
  );
};
