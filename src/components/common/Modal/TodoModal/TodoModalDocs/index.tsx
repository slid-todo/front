import { useState } from 'react';

import { Chip } from '@/components/common/Chip';
import { FileUpload } from './FileUpload';
import { LinkUpload } from './LinkUpload';

export const TodoModalDocs = () => {
  const [isFileActive, setIsFileActive] = useState(true);
  const [isLinkActive, setIsLinkActive] = useState(false);

  const onClickChip = () => {
    setIsFileActive(!isFileActive);
    setIsLinkActive(!isLinkActive);
  };

  return (
    <div className="flex flex-col items-start gap-12">
      <div className="flex flex-col items-start gap-12">
        <span className="text-base-semibold text-slate-800">자료</span>
        <div className="flex items-start gap-12">
          <Chip
            variant={isFileActive ? 'active' : 'default'}
            onClick={onClickChip}
          >
            파일 업로드
          </Chip>
          <Chip
            variant={isLinkActive ? 'active' : 'default'}
            onClick={onClickChip}
          >
            링크 첨부
          </Chip>
        </div>
      </div>
      {isFileActive ? <FileUpload /> : <LinkUpload />}
    </div>
  );
};
