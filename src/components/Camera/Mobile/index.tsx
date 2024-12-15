/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Image from 'next/image';

function VideoCameraOrGallery() {
  const [source, setSource] = useState<string>('');

  const handleCapture = (target: any) => {
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const newUrl = URL.createObjectURL(file);
      setSource(newUrl);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h2 className="text-xl font-bold">사진 가져오기</h2>

      {source && (
        <Image
          src={source}
          alt="snap"
          width="300"
          height="300"
          className="border border-gray-300"
        />
      )}

      <div className="flex flex-col space-y-2">
        <p className="font-semibold">카메라로 직접 촬영하기:</p>
        <input
          accept="image/*"
          type="file"
          capture="environment"
          onChange={(e) => handleCapture(e.target)}
          className="mb-4"
        />

        <p className="font-semibold">앨범에서 선택하기:</p>
        <input
          accept="image/*"
          type="file"
          onChange={(e) => handleCapture(e.target)}
          className="mb-4"
        />
      </div>
    </div>
  );
}

export default VideoCameraOrGallery;
