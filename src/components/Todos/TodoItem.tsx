'use client';

import { useState } from 'react';
import { FaCamera } from 'react-icons/fa6';
import Image from 'next/image';
import { TodayTodoItem } from '@/hooks/apis/Todo/useTodayTodo';
import { InputModalContent } from '../ImageInput';
import { CertifiedModal } from '../CertifiedModal';
// Import CertifiedModal

interface TodoItemProps extends TodayTodoItem {
  className?: string;
}

export const TodoItem = (props: TodoItemProps) => {
  const { todoTitle, complete, className = '' } = props;

  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isCertifiedModalOpen, setIsCertifiedModalOpen] = useState(false); // New state

  const handleOpenGalleryModal = () => {
    setIsGalleryModalOpen(true);
  };

  const handleCloseGalleryModal = () => {
    setIsGalleryModalOpen(false);
  };

  // Handler for when an image is selected
  const handleImageSelected = (imageUrl: string) => {
    // You might want to perform additional actions here, like updating the todo item with the new image
    console.log('Image selected:', imageUrl);

    // Close the gallery modal
    setIsGalleryModalOpen(false);

    // Open the certified modal
    setIsCertifiedModalOpen(true);
  };

  const handleCloseCertifiedModal = () => {
    setIsCertifiedModalOpen(false);
  };

  return (
    <>
      <div className={`flex h-72 ${className}`}>
        {complete.completePic ? (
          <div className="flex-center my-8 size-56 overflow-hidden rounded-16 bg-sub-purple">
            <Image
              src={complete.completePic}
              alt="Complete Picture"
              width={56}
              height={56}
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className="flex-center my-8 size-56 cursor-pointer rounded-16 bg-sub-purple"
            onClick={handleOpenGalleryModal}
          >
            <FaCamera fill="white" />
          </div>
        )}
        <div className="my-14 ml-16">
          <div className="text-xs-medium text-custom-gray-100">
            현재 목표가 안 나와요 ㅠ
          </div>
          <div className="text-base-medium text-custom-gray-300">
            {todoTitle}
          </div>
        </div>
      </div>

      {/* Input Modal */}
      <InputModalContent
        isOpen={isGalleryModalOpen}
        onClose={handleCloseGalleryModal}
        onImageSelected={handleImageSelected} // Pass the callback
      />

      {/* Certified Modal */}
      <CertifiedModal
        isOpen={isCertifiedModalOpen}
        onClose={handleCloseCertifiedModal}
      />
    </>
  );
};
