'use client';

import { useState } from 'react';
import { FaCamera, FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TodoCompletesResponse } from '@/hooks/apis/Todo/useTodayTodo';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';
import { InputModalContent } from '../ImageInput';
import { CertifiedModal } from '../CertifiedModal';

interface TodoItemProps {
  todoId: number;
  todoTitle: string;
  goalTitle: string;
  goalColor: string;
  complete?: TodoCompletesResponse;
  className?: string;
}

export const TodoItem = (props: TodoItemProps) => {
  const {
    todoTitle,
    goalTitle,
    goalColor,
    complete,
    todoId,
    className = '',
  } = props;

  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isCertifiedModalOpen, setIsCertifiedModalOpen] = useState(false);

  const router = useRouter();

  const {
    setCompleteId,
    setImageUrl,
    setCompletePicName,
    setCompleteLink,
    setTodoTitle,
    setGoalTitle,
    reset,
  } = useVerificationNoteStore();

  const handleOpenGalleryModal = () => {
    setTodoTitle(todoTitle);
    setGoalTitle(goalTitle);
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
          <div className="flex-center relative my-8 size-56 overflow-hidden rounded-16">
            <Image
              src={complete.completePic}
              alt="Complete Picture"
              fill
              className="object-fill"
            />
            <FaCircleCheck fill="white" className="absolute" />
          </div>
        ) : (
          <div
            className="flex-center my-8 size-56 cursor-pointer rounded-16"
            style={{ backgroundColor: goalColor }}
            onClick={handleOpenGalleryModal}
          >
            <FaCamera fill="white" />
          </div>
        )}
        <div
          className="my-14 ml-16"
          onClick={() => router.push(`/todos/${todoId}`)}
        >
          <div className="text-xs-medium text-custom-gray-100">{goalTitle}</div>
          <div className="text-base-medium text-custom-gray-300">
            {todoTitle}
          </div>
        </div>
      </div>

      <InputModalContent
        todoTitle={todoTitle}
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
