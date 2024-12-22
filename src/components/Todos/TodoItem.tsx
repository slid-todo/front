'use client';

import { useState } from 'react';
import { FaCamera } from 'react-icons/fa6';
import Image from 'next/image';
import { TodayTodoItem } from '@/hooks/apis/Todo/useTodayTodo';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore'; // Zustand 스토어 임포트
import { InputModalContent } from '../ImageInput';
import { CertifiedModal } from '../CertifiedModal';

interface TodoItemProps extends TodayTodoItem {
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
    if (complete.completeId) {
      setCompleteId(complete.completeId); // completeId 설정
    }
    setIsGalleryModalOpen(true);
  };

  const handleCloseGalleryModal = () => {
    setIsGalleryModalOpen(false);
  };

  const handleImageSelected = (imageUrl: string) => {
    console.log('Image selected:', imageUrl);

    // 스토어에 이미지 URL 설정
    setImageUrl(imageUrl);

    // completePicName 설정 (completeId가 있어야 함)
    if (complete.completeId) {
      setCompletePicName(`${complete.completeId}-image`);
    }

    setCompleteLink('임시링크');

    // 갤러리 모달 닫기
    setIsGalleryModalOpen(false);

    // 인증 모달 열기
    setIsCertifiedModalOpen(true);
  };

  const handleCloseCertifiedModal = () => {
    console.log('Certified Modal closed');
    setIsCertifiedModalOpen(false);

    // 인증 모달을 닫을 때 스토어 초기화
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
        onImageSelected={handleImageSelected}
      />

      {/* Certified Modal */}
      <CertifiedModal
        isOpen={isCertifiedModalOpen}
        onClose={handleCloseCertifiedModal}
      />
    </>
  );
};
