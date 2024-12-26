import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { useTodoDataStore } from '@/store/useTodoDataStore';
import { useTodoModalStore } from '@/store/useTodoModalStore';
import { useEditGoalTitleMutation } from './apis/Goals/useEditGoalTitleMutation';

interface useSelectedGoalMenuProps {
  id: number;
  title: string;
}

export const useSelectGoalMenu = ({ id, title }: useSelectedGoalMenuProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate: editGoalTitleMutation } = useEditGoalTitleMutation(id);

  const openModal = useTodoModalStore((state) => state.open);
  const setTodoData = useTodoDataStore((state) => state.setTodoData);

  const [isOpenTodoMoal, setIsOpenTodoModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeGoalTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const handleEditGoalTitle = () => {
    editGoalTitleMutation({ title: editTitle });
    setIsEdit(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && editTitle.trim() && editTitle !== title) {
      handleEditGoalTitle();
    }
  };

  const handleBlur = () => {
    if (editTitle.trim() && editTitle !== title) {
      handleEditGoalTitle();
    } else {
      setIsEdit(false);
    }
  };

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
      setIsEdit(true);
    } else if (item.value === '삭제하기') {
      setIsOpenDeleteModal(true);
    }
  };

  const handleCloseConfirmationModal = () => {
    setIsOpenDeleteModal(false);
  };

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit, inputRef]);

  return {
    inputRef,
    editTitle,
    isEdit,
    isOpenTodoMoal,
    isOpenDeleteModal,
    handleKeyDown,
    handleBlur,
    handleChangeGoalTitle,
    handleOpenMenu,
    handleCloseMenu,
    handleSelectItem,
    handleCloseConfirmationModal,
  };
};
