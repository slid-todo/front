'use client';

import { useFilePicker } from '@/hooks/Verification/useFilePicker';
import { Button } from '../common/Button/Button';

interface MobileCaptureProps {
  onCapture: (imageUrl: string, imageExtension: string) => void;
}

export const MobileCapture = (props: MobileCaptureProps) => {
  const { onCapture } = props;

  const { fileInputRef, openFileDialog, handleChange } = useFilePicker(
    onCapture,
    'environment',
  );

  return (
    <>
      <Button size="medium" onClick={openFileDialog} className="w-120 px-12">
        사진 촬영
      </Button>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
      />
    </>
  );
};
