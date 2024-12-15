'use client';

import { ChangeEvent, useRef } from 'react';
import { Button } from '../common/Button/Button';

interface GalleryPickerProps {
  onSelect: (imageUrl: string) => void;
}

export const GalleryPicker = (props: GalleryPickerProps) => {
  const { onSelect } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleGalleryChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64URL = reader.result as string;
        onSelect(base64URL);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Button size="medium" onClick={handleButtonClick} className="w-120 px-12">
        앨범에서 선택
      </Button>
      <input
        type="file"
        accept="image/*"
        onChange={handleGalleryChange}
        ref={fileInputRef}
        className="hidden"
      />
    </>
  );
};
