'use client';

import { useRouter } from 'next/navigation';
import { Logo } from '@/components/AuthPage/Logo';
import { Button } from '@/components/common/Button/Button';
import { PageContainer } from '@/components/common/PageContainer';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  return (
    <PageContainer>
      <div className="mb-48 flex flex-col items-center">
        <Logo />
      </div>
      <Button size="large" onClick={handleClick}>
        대시보드로 가기
      </Button>
    </PageContainer>
  );
}
