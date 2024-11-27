'use client';

import HeartIcon from '@/assets/icon-heart.svg';
import { notify } from '@/store/useToastStore';
import TodoModal from '@/components/common/Modal/TodoModal';

export default function Home() {
  const handleSuccessClick = () => {
    notify('success', '성공 메시지입니다!', 3000);
  };

  const handleErrorClick = () => {
    notify('error', '에러 메시지입니다!', 3000);
  };

  const handleInfoClick = () => {
    notify('info', '정보 메시지입니다!', 3000);
  };

  return (
    <div>
      <button className="size-100">안녕asdfasfd</button>
      <HeartIcon width="32" height="32" fill="#FF0000" />

      <div className="text-3xl-bold">3xl bold</div>
      <div className="text-3xl-semibold">3xl semibold</div>
      <div className="text-3xl-medium">3xl medium</div>
      <div className="text-3xl-normal">3xl normal</div>
      <div className="text-3xl-light">3xl light</div>

      <div className="text-3xl-bold text-blue-50">3xl bold</div>
      <div className="text-3xl-semibold text-blue-100">3xl semibold</div>
      <div className="text-3xl-medium text-blue-200">3xl medium</div>
      <div className="text-3xl-normal text-blue-300">3xl normal</div>
      <div className="text-3xl-light text-blue-400">3xl light</div>

      <div className="text-3xl-bold text-blue-500">3xl bold</div>
      <div className="text-3xl-semibold text-blue-600">3xl semibold</div>
      <div className="text-3xl-medium text-blue-700">3xl medium</div>
      <div className="text-3xl-normal text-blue-800">3xl normal</div>
      <div className="text-3xl-light text-blue-900">3xl light</div>

      <div className="text-3xl-bold text-blue-950">3xl bold</div>

      <button
        type="button"
        className="bg-green-70 text-white"
        onClick={handleSuccessClick}
      >
        성공 토스트 띄우기
      </button>
      <button
        type="button"
        className="bg-red-500 text-white"
        onClick={handleErrorClick}
      >
        에러 토스트 띄우기
      </button>
      <button
        type="button"
        className="bg-blue-500 text-white"
        onClick={handleInfoClick}
      >
        정보 토스트 띄우기
      </button>
      <TodoModal />
    </div>
  );
}
