'use client';

import { useState } from 'react';

import HeartIcon from '@/assets/icon-heart.svg';
import { Filter } from '@/components/common/Filter';
import { Header } from '@/components/common/Header';
import { SelectionModal } from '@/components/SelectionModal';
import TodoModal from '@/components/TodoModal/TodoModalContainer';
import { notify } from '@/store/useToastStore';
import { useTodoModalStore } from '@/store/useTodoModalStore';

export default function Home() {
  const { isOpen } = useTodoModalStore();

  const [currentFilter, setCurrentFilter] = useState<string>('All');
  const [isSelectionModalOpen, setIsSelectionModalOpen] =
    useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('');

  // 모바일 카메라 촬영 이미지 상태
  const [mobileSource, setMobileSource] = useState<string>('');

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
    console.log('Selected filter:', filter);
  };

  const handleSuccessClick = () => {
    notify('success', '성공 메시지입니다!', 3000);
  };

  const handleErrorClick = () => {
    notify('error', '에러 메시지입니다!', 3000);
  };

  const handleInfoClick = () => {
    notify('info', '정보 메시지입니다!', 3000);
  };

  const handleOpenSelectionModal = () => {
    setIsSelectionModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSelectionModalOpen(false);
    setSelectedValue('취소버튼클릭');
  };

  const handleConfirmModal = () => {
    setIsSelectionModalOpen(false);
    setSelectedValue('확인버튼클릭');
  };

  const handleMobileCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const newUrl = URL.createObjectURL(file);
      setMobileSource(newUrl);
      console.log('Captured Image File:', file);
    }
  };

  return (
    <div className="pt-48 sm:px-60 sm:pt-0">
      <Header />
      <button className="size-100">안녕asdfasfd</button>
      <HeartIcon width="32" height="32" fill="#FF0000" />

      <button
        type="button"
        className="bg-black text-white"
        onClick={handleSuccessClick}
      >
        성공 토스트 띄우기
      </button>
      <button
        type="button"
        className="bg-red-500 text-white"
        onClick={handleErrorClick}
      >
        에러 토스트 띄우기
      </button>
      <button
        type="button"
        className="bg-blue-500 text-white"
        onClick={handleInfoClick}
      >
        정보 토스트 띄우기
      </button>

      <div className="p-4">
        <h1 className="mb-4 text-xl font-bold">Todo List</h1>
        <Filter
          filters={['All', 'To Do', 'Completed', 'In Progress']}
          onFilterChange={handleFilterChange}
        />
        <div className="mt-4">
          <p>Currently selected filter: {currentFilter}</p>
        </div>
      </div>
      {isOpen && <TodoModal todoType="생성" />}

      <div className="mt-8 rounded border p-4">
        <h2 className="mb-4 text-lg font-semibold">SelectionModal 사용 예시</h2>
        <p>선택된 값: {selectedValue}</p>
        <button
          className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
          onClick={handleOpenSelectionModal}
        >
          SelectionModal 열기
        </button>
      </div>

      {isSelectionModalOpen && (
        <SelectionModal
          isOpen={isSelectionModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleConfirmModal}
          message="할 일 제목이에요~"
          cancelButtonMessage="취소"
          confirmButtonMessage="확인"
        />
      )}

      {/* 모바일 카메라 호출 부분 */}
      <div className="mt-8 rounded border p-4">
        <h2 className="mb-4 text-lg font-semibold">모바일 카메라 호출</h2>
        <p className="mb-4 text-sm text-gray-700">
          아래 인풋을 클릭하면 모바일 기기에서는 카메라 앱이 실행되어 사진
          촬영이 가능합니다.
        </p>
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          capture="environment" // 후면카메라 호출
          onChange={handleMobileCapture}
          className="mb-4"
        />

        {mobileSource && (
          <div className="mt-4">
            <h3 className="text-md mb-2 font-semibold">촬영 결과</h3>
            <img
              src={mobileSource}
              alt="MobileCapture"
              className="max-w-md border border-gray-300"
            />
          </div>
        )}
      </div>
    </div>
  );
}
