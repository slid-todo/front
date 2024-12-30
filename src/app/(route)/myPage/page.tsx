import type { Metadata } from 'next';
import { Header } from '@/components/common/Header';
import { MyProfile } from '@/components/MyPage/MyProfile';
import { MyFollow } from '@/components/MyPage/MyFollow';
import { MyPageSetting } from '@/components/MyPage/MyPageSetting';

export const metadata: Metadata = {
  title: 'My page',
  description: 'My page',
};

export default function myPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen w-screen flex-col gap-16 bg-custom-white-100 p-16 pt-70 md:px-200 xl:px-400 2xl:px-650">
        <MyProfile />
        <MyFollow />
        <hr className="my-8 h-6 w-full bg-custom-white-200" />
        <MyPageSetting />
      </div>
    </>
  );
}
