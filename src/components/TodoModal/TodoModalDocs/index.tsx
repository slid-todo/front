import { useState } from 'react';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { Chip } from '@/components/common/Chip';
import { FileUpload } from './FileUpload';
import { LinkUpload } from './LinkUpload';

export const TodoModalDocs = () => {
  const { resetFile, resetLink } = useTodoDataStore();
  const [isFileActive, setIsFileActive] = useState(true);
  const [isLinkActive, setIsLinkActive] = useState(false);

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
