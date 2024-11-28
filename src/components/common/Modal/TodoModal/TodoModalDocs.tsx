'use client';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Chip } from '../../Chip/Chip';

export const TodoModalDocs = () => {
  const [isFileActive, setIsFileActive] = useState(true);
  const [isLinkActive, setIsLinkActive] = useState(false);

  const onClickChip = () => {
    setIsFileActive(!isFileActive);
    setIsLinkActive(!isLinkActive);
  };

  return (
    <div className="flex flex-col items-start gap-12">
      {/* 자료 */}
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
      {/* 자료 */}
      {/* 파일업로드 */}
      <div className="flex h-184 w-full shrink-0 items-center justify-center rounded-12 bg-slate-50">
        <button className="inline-flex flex-col items-center justify-center gap-8">
          <FaPlus size={24} className="text-slate-400" />
          <span className="text-sm-normal text-slate-400 sm:text-base-normal">
            파일을 업로드해주세요
          </span>
        </button>
      </div>
      {/* 파일업로드 */}
    </div>
  );
};
