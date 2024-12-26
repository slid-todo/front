import { useState } from 'react';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { Chip } from '@/components/common/Chip';
import { useTodoModalStore } from '@/store/useTodoModalStore';
import { FileUpload } from './FileUpload';
import { LinkUpload } from './LinkUpload';

export const TodoModalDocs = () => {
  const { resetFile, resetLink, todoData } = useTodoDataStore();
  const { todoType } = useTodoModalStore();
  const [isFileActive, setIsFileActive] = useState(
    todoType === '생성' || !!todoData.imageEncodedBase64 || !todoData.todoLink,
  );
  const [isLinkActive, setIsLinkActive] = useState(
    todoType === '생성' ? false : !!todoData.todoLink,
  );

  const onClickFileChip = () => {
    setIsFileActive((prev) => !prev);
    setIsLinkActive((prev) => !prev);
    resetLink();
  };

  const onClickLinkChip = () => {
    setIsFileActive((prev) => !prev);
    setIsLinkActive((prev) => !prev);
    resetFile();
  };

  return (
    <div className="flex flex-col items-start gap-12">
      <div className="flex flex-col items-start gap-12">
        <span className="text-base-semibold text-slate-800">자료</span>
        <div className="flex items-start gap-12">
          <Chip
            variant={isFileActive ? 'active' : 'default'}
            onClick={onClickFileChip}
          >
            파일 업로드
          </Chip>
          <Chip
            variant={isLinkActive ? 'active' : 'default'}
            onClick={onClickLinkChip}
          >
            링크 첨부
          </Chip>
        </div>
      </div>
      {isFileActive ? <FileUpload /> : <LinkUpload />}
    </div>
  );
};
