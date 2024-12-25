'use client';

import { useState } from 'react';
import { FaCamera } from 'react-icons/fa6';
import Image from 'next/image';
import { TodoCompletesResponse } from '@/hooks/apis/Todo/useTodayTodo';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';
import { InputModalContent } from '../ImageInput';
import { CertifiedModal } from '../CertifiedModal';

interface TodoItemProps {
  todoId: number;
  todoTitle: string;
  complete?: TodoCompletesResponse;
  className?: string;
}

export const TodoItem = (props: TodoItemProps) => {
  const { todoTitle, complete, className = '' } = props;

  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isCertifiedModalOpen, setIsCertifiedModalOpen] = useState(false);

  const {
    setCompleteId,
    setImageUrl,
    setCompletePicName,
    setCompleteLink,
    reset,
  } = useVerificationNoteStore();

  const handleOpenGalleryModal = () => {
    if (complete?.completeId) {
      setCompleteId(complete.completeId);
    }
    setIsGalleryModalOpen(true);
  };

  const handleCloseGalleryModal = () => {
    setIsGalleryModalOpen(false);
  };

  const handleImageSelected = (imageUrl: string, imageExtension: string) => {
    setImageUrl(imageUrl);

    const ext = imageExtension || 'png';
    if (complete?.completeId) {
      setCompletePicName(`${complete.completeId}-image.${ext}`);
    } else {
      setCompletePicName(`temp-image.${ext}`);
    }

    setCompleteLink('임시링크');
    setIsGalleryModalOpen(false);
    setIsCertifiedModalOpen(true);
  };

  const handleCloseCertifiedModal = () => {
    setIsCertifiedModalOpen(false);
    reset();
  };

  return (
    <>
      <div className={`flex h-72 ${className}`}>
        {complete?.completePic ? (
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
            현재 목표가 안 나와요 ㅠ(목표 api 수정된걸로 적용해야 하는데 서버
            터져서 확인 못 하는 중)
          </div>
          <div className="text-base-medium text-custom-gray-300">
            {todoTitle}
          </div>
        </div>
      </div>

      <InputModalContent
        isOpen={isGalleryModalOpen}
        onClose={handleCloseGalleryModal}
        onImageSelected={handleImageSelected}
      />

      <CertifiedModal
        isOpen={isCertifiedModalOpen}
        onClose={handleCloseCertifiedModal}
      />
    </>
  );
};
