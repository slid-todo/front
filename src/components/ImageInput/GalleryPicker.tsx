'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { Button } from '../common/Button/Button';

interface GalleryPickerProps {
  onSelect: (imageUrl: string) => void;
}

export const GalleryPicker = (props: GalleryPickerProps) => {
  const { onSelect } = props;

  const [preview, setPreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleGalleryChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onSelect(imageUrl);
    }
  };

  return (
    <>
      <Button onClick={handleButtonClick}>앨범에서 선택</Button>
      <input
        type="file"
        accept="image/*"
        onChange={handleGalleryChange}
        ref={fileInputRef}
        className="hidden"
      />
      <div>{preview}</div>
    </>
  );
};
