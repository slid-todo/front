'use client';

import HeartIcon from '@/assets/icon-heart.svg';
import { Filter } from '@/components/common/Filter';
import { Header } from '@/components/common/Header';
import { SelectionModal } from '@/components/SelectionModal';
import TodoModal from '@/components/TodoModal/TodoModalContainer';
import { notify } from '@/store/useToastStore';
import { useTodoModalStore } from '@/store/useTodoModalStore';
import { useState } from 'react';

export default function Home() {
  const { isOpen } = useTodoModalStore();

  const [currentFilter, setCurrentFilter] = useState<string>('All');
  const [isSelectionModalOpen, setIsSelectionModalOpen] =
    useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('');

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

  // SelectionModal을 열기 위한 핸들러
  const handleOpenSelectionModal = () => {
    setIsSelectionModalOpen(true);
  };

  // SelectionModal에서 Confirm 시 호출되는 핸들러
  const handleConfirmSelection = (value: string) => {
    setSelectedValue(value);
    console.log('SelectionModal 입력값:', value);
  };

  // SelectionModal 닫기 핸들러
  const handleCloseSelectionModal = () => {
    setIsSelectionModalOpen(false);
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
        <p>선택된 값: {selectedValue || '없음'}</p>
        <button
          className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
          onClick={handleOpenSelectionModal}
        >
          SelectionModal 열기
        </button>
      </div>

      {/* SelectionModal 렌더링 */}
      {isSelectionModalOpen && (
        <SelectionModal
          isOpen={isSelectionModalOpen}
          onClose={handleCloseSelectionModal}
          onConfirm={handleConfirmSelection}
        />
      )}
    </div>
  );
}
