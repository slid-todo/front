import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export const VerificationNoteFile = () => {
  const [fileName] = useState<string>('');

  return (
    <div
      className={`flex-col items-start gap-12 self-stretch ${fileName ? 'flex' : 'hidden'}`}
    >
      <span className="text-base-semibold">첨부된 파일</span>
      <div className="flex items-center justify-between self-stretch">
        <div className="flex items-center gap-8">
          <div className="flex size-56 rounded-16 bg-fuchsia-500" />
          <span className="text-sm-normal text-custom-gray-100">
            {fileName}
          </span>
        </div>
        <IoMdClose />
      </div>
    </div>
  );
};
