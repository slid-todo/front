'use client';

import { ChangeEvent, useRef } from 'react';
import { Button } from '../common/Button/Button';

interface MobileCaptureProps {
  onCapture: (imageUrl: string) => void;
}

export const MobileCapture = (props: MobileCaptureProps) => {
  const { onCapture } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCameraChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64URL = reader.result as string;
        onCapture(base64URL);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Button size="medium" onClick={handleButtonClick} className="w-120 px-12">
        사진 촬영
      </Button>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCameraChange}
        ref={fileInputRef}
        className="hidden"
      />
    </>
  );
};
