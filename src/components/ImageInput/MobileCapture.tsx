'use client';

import { useState } from 'react';
import Image from 'next/image';

interface MobileCaptureProps {
  onCapture: (imageUrl: string) => void;
}

export const MobileCapture = (props: MobileCaptureProps) => {
  const { onCapture } = props;

  const [preview, setPreview] = useState<string>('');

  const handleCameraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onCapture(imageUrl);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h2 className="text-lg font-bold">카메라로 촬영하기</h2>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCameraChange}
      />
      {preview && (
        <Image
          src={preview}
          alt="Captured"
          className="size-48 border border-gray-300 object-cover"
        />
      )}
    </div>
  );
};
