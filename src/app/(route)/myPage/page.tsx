import { Header } from '@/components/common/Header';
import { PageContainer } from '@/components/common/PageContainer';
import { MyFollow } from '@/components/MyPage/MyFollow';
import { MyPageSetting } from '@/components/MyPage/MyPageSetting';
import { MyProfile } from '@/components/MyPage/MyProfile';

export default function myPage() {
  return (
    <>
      <Header />
      <PageContainer>
        <MyProfile />
        <MyFollow />
        <hr className="my-8 h-6 w-full bg-custom-white-200" />
        <MyPageSetting />
      </PageContainer>
    </>
  );
}
