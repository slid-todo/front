import { useState } from 'react';

import { useTodoDataStore } from '@/store/useTodoDataStore';
import { useTodoModalStore } from '@/store/useTodoModalStore';

interface useSelectedGoalMenuProps {
  id: number;
  title: string;
}

export const useSelectGoalMenu = ({ id, title }: useSelectedGoalMenuProps) => {
  const openModal = useTodoModalStore((state) => state.open);
  const setTodoData = useTodoDataStore((state) => state.setTodoData);

  const [isOpenTodoMoal, setIsOpenTodoModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenTodoModal(true);
  };

  const handleCloseMenu = () => {
    setIsOpenTodoModal(false);
  };

  const handleSelectItem = (item: { value: string }) => {
    setIsOpenTodoModal(false);
    if (item.value === '할일추가') {
      openModal('생성');
      setTodoData({ goalId: id, goalTitle: title });
    } else if (item.value === '수정하기') {
      openModal('수정');
      setTodoData({ goalId: id, goalTitle: title });
    } else if (item.value === '삭제하기') {
      setIsOpenDeleteModal(true);
    }
  };

  const handleCloseConfirmationModal = () => {
    setIsOpenDeleteModal(false);
  };

  return {
    isOpenTodoMoal,
    isOpenDeleteModal,
    handleOpenMenu,
    handleCloseMenu,
    handleSelectItem,
    handleCloseConfirmationModal,
  };
};
