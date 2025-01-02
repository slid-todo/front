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

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-16">
        <IoMdClose className="size-24 cursor-pointer" onClick={handleBack} />
        <span className="text-xl-semibold">할 일 상세보기</span>
      </div>
      <FaEllipsisVertical
        className="relative size-24 p-2 text-custom-gray-100"
        onClick={handleClick}
      />
      {isOpenTab && (
        <div className="absolute right-16 top-48 flex flex-col rounded-12 bg-white">
          <div
            className="flex-center cursor-pointer rounded-t-12 px-16 py-8 text-sm-normal hover:bg-custom-white-200"
            onClick={handleOpenModify}
          >
            수정하기
          </div>
          <div
            className="flex-center cursor-pointer rounded-b-12 px-16 py-8 text-sm-normal hover:bg-custom-white-200"
            onClick={handleDelete}
          >
            삭제하기
          </div>
        </div>
      )}
    </div>
  );
};
