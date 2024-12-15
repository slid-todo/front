'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryPickerProps {
  onSelect: (imageUrl: string) => void;
}

export const GalleryPicker = (props: GalleryPickerProps) => {
  const { onSelect } = props;

  const [preview, setPreview] = useState<string>('');

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onSelect(imageUrl);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h2 className="text-lg font-bold">앨범에서 선택하기</h2>
      <input type="file" accept="image/*" onChange={handleGalleryChange} />
      {preview && (
        <Image
          src={preview}
          alt="Selected"
          className="size-48 border border-gray-300 object-cover"
        />
      )}
    </div>
  );
};
