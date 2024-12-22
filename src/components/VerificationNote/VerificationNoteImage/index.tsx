'use client';

import { IoReload } from 'react-icons/io5';
import Image from 'next/image';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';

export const VerificationNoteImage = () => {
  const { imageUrl, setImageUrl, setCompletePicName } =
    useVerificationNoteStore();

  const handleReload = () => {
    // 이미지 재촬영 로직을 구현하거나, 갤러리 모달을 다시 여는 로직을 추가할 수 있습니다.
    // 예를 들어, 갤러리 모달을 다시 열려면:
    // openGalleryModal(); // 이 함수는 상위 컴포넌트에서 전달받아야 할 수 있습니다.
    // 여기서는 단순히 이미지 URL과 이름을 초기화합니다.
    setImageUrl('');
    setCompletePicName('');
  };

  if (!imageUrl) {
    return null;
  }

  return (
    <div className="relative flex size-240">
      <Image
        src={imageUrl}
        alt="Selected Image"
        className="size-full rounded-16 object-cover"
        fill
      />
      <button
        className="flex-center absolute bottom-8 right-8 cursor-pointer gap-4 rounded-full bg-white px-10 py-2 text-sm-semibold text-primary-200 hover:bg-custom-white-200"
        onClick={handleReload}
      >
        <IoReload />
        <span>재촬영</span>
      </button>
    </div>
  );
};
