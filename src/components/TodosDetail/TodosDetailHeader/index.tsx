'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { useTodoDetailQuery } from '@/hooks/apis/Todo/useTodoDetailQuery';
import { useTodoModalStore } from '@/store/useTodoModalStore';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { convertImageToBase64 } from '@/apis/Todo/convertImageToBase64';
import { useDeleteTodo } from '@/hooks/apis/Todo/useDeleteTodo';
import { Dropdown } from '@/components/common/Dropdown';
import { DROPDOWN } from '@/constants/dropdown';

interface TodosDetailHeaderProps {
  todoId: string;
}

export const TodosDetailHeader = ({ todoId }: TodosDetailHeaderProps) => {
  const [isOpenTab, setIsOpenTab] = useState(false);

  const router = useRouter();
  const { details } = useTodoDetailQuery(Number(todoId));
  const { open } = useTodoModalStore();
  const { setTodoData } = useTodoDataStore();
  const { mutate: deleteTodo } = useDeleteTodo();

  const handleBack = () => {
    router.back();
  };

  const handleClick = () => {
    setIsOpenTab(!isOpenTab);
  };

  const handleOpenModify = async () => {
    let imageUrl: string | undefined = undefined;

    if (details?.todoPic) {
      imageUrl = await convertImageToBase64(details.todoPic);
    }

    setTodoData({
      todoId: Number(todoId),
      title: details?.todoTitle,
      startDate: details?.startDate,
      endDate: details?.endDate,
      todoStatus: details?.todoStatus,
      todoLink: details?.todoLink,
      imageEncodedBase64: imageUrl,
      imageName: details?.todoPicName,
      goalTitle: details?.goalTitle,
    });
    open('수정');
    setIsOpenTab(false);
  };

  const handleDelete = () => {
    deleteTodo({ todoId: Number(todoId) });
  };

  const handleSelectItem = (item: { value: string }) => {
    if (item.value === '수정하기') {
      handleOpenModify();
    } else if (item.value === '삭제하기') {
      handleDelete();
    }
  };

  const renderDropdownItem = (item: { value: string }) => {
    return <span>{item.value}</span>;
  };

  return (
    <div className="relative flex items-center justify-between">
      <div className="flex items-center gap-16">
        <IoMdClose className="size-24 cursor-pointer" onClick={handleBack} />
        <span className="text-xl-semibold">할 일 상세보기</span>
      </div>

      <FaEllipsisVertical
        className="size-24 p-2 text-custom-gray-100"
        onClick={handleClick}
      />
      <div className="absolute right-0 top-40 w-81">
        <Dropdown
          dropdownData={DROPDOWN.TODO_DETAIL_MENU}
          onSelectItem={handleSelectItem}
          isOpenDropdown={isOpenTab}
          renderItem={renderDropdownItem}
        />
      </div>
    </div>
  );
};
