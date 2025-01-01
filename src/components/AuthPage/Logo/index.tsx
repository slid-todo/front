import LogoMain from '@/assets/svg/svg-logo-main.svg';

export const Logo = () => {
  return (
    <div className="mb-48 w-full pt-78">
      <LogoMain className="w-90" />
      <div className="pt-24">
        <h1 className="text-2xl-semibold">안녕하세요!</h1>
        <h1 className="text-2xl-semibold text-primary-200">
          같이 찍어서 인증 시작해 볼까요?
        </h1>
      </div>
    </div>
  );
};
