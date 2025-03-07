'use client';

import { useRouter } from 'next/navigation';

import LogoMain from '@/assets/svg/svg-logo-main.svg';
import { Button } from '@/components/common/Button/Button';
import { Header } from '@/components/common/Header';
import { PageContainer } from '@/components/common/PageContainer';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex">
      <Header />
      <PageContainer header={true} className="flex-center">
        <div className="flex-center flex-col gap-15">
          <LogoMain className="w-90 animate-bounce" />
          <h1 className="text-3xl-bold text-custom-gray-300">
            페이지를 찾을 수 없어요.
          </h1>
          <p className="text-lg-medium text-custom-gray-100">
            뒤로 가거나 홈으로 이동해 보세요.
          </p>
          <div className="flex gap-8">
            <Button
              primary={true}
              size="small"
              onClick={() => router.push('/dashboard')}
            >
              홈으로 돌아가기
            </Button>
            <Button primary={false} size="small" onClick={() => router.back()}>
              이전 페이지
            </Button>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
