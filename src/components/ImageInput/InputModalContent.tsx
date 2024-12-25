'use client';

import { useState, useEffect } from 'react';
import { ModalContent } from '../common/Modal';
import { GalleryPicker } from './GalleryPicker';
import { MobileCapture } from './MobileCapture';

interface InputModalContentProps {
  isOpen: boolean;
  onClose: () => void;
  onImageSelected?: (imageUrl: string) => void;
}

export const InputModalContent = (props: InputModalContentProps) => {
  const { isOpen, onClose, onImageSelected } = props;

  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');

  const handleSelectFromGallery = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
  };

  const handleCapturePhoto = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
  };

  useEffect(() => {
    if (selectedImageUrl && onImageSelected) {
      onImageSelected(selectedImageUrl);
    }
  }, [selectedImageUrl, onImageSelected]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedImageUrl('');
    }
  }, [isOpen]);

  return (
    <ModalContent isOpen={isOpen} onClose={onClose}>
      <h2 className="text-base-medium text-primary-100">
        원하는 메시지
        <span className="text-slate-800"> 인증하기</span>
      </h2>

      <div className="my-32 flex gap-8">
        <MobileCapture onCapture={handleCapturePhoto} />
        <GalleryPicker onSelect={handleSelectFromGallery} />
      </div>
    </ModalContent>
  );
};
