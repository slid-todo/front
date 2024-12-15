'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { Button } from '../common/Button/Button';

interface MobileCaptureProps {
  onCapture: (imageUrl: string) => void;
}

export const MobileCapture = (props: MobileCaptureProps) => {
  const { onCapture } = props;

  const [preview, setPreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCameraChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onCapture(imageUrl);
    }
  };

  return (
    <>
      <Button onClick={handleButtonClick}>사진 촬영</Button>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCameraChange}
        ref={fileInputRef}
        className="hidden"
      />
      {preview && <div>{preview}</div>}
    </>
  );
};
