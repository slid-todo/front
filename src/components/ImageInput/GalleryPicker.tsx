'use client';

import { useFilePicker } from '@/hooks/Verification/useFilePicker';
import { Button } from '../common/Button/Button';

interface GalleryPickerProps {
  onSelect: (imageUrl: string, imageExtension: string) => void;
}

export const GalleryPicker = (props: GalleryPickerProps) => {
  const { onSelect } = props;

  const { fileInputRef, openFileDialog, handleChange } =
    useFilePicker(onSelect);

  return (
    <>
      <Button size="medium" onClick={openFileDialog} className="w-120 px-12">
        앨범에서 선택
      </Button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
      />
    </>
  );
};
