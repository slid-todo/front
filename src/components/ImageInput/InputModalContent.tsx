'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ModalContent } from '../common/Modal';
import { GalleryPicker } from './GalleryPicker';
import { MobileCapture } from './MobileCapture';

interface InputModalContentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InputModalContent = (props: InputModalContentProps) => {
  const { isOpen, onClose } = props;

  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');

  const handleSelectFromGallery = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
  };

  const handleCapturePhoto = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
  };

  return (
    <ModalContent isOpen={isOpen} onClose={onClose}>
      <h2 className="text-base-medium text-primary-100">
        원하는 메시지
        <span className="text-slate-800"> 인증하기</span>
      </h2>

      <div className="my-16 flex flex-col gap-8">
        <GalleryPicker onSelect={handleSelectFromGallery} />
        <MobileCapture onCapture={handleCapturePhoto} />
      </div>

      {selectedImageUrl && (
        <div>
          <p>선택한 이미지 미리보기:</p>
          <Image
            src={selectedImageUrl}
            alt="Preview"
            className="max-h-64 max-w-full object-cover"
            width={300}
            height={200}
          />
        </div>
      )}
    </ModalContent>
  );
};
