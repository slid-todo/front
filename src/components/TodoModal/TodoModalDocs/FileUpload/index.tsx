import { ChangeEvent, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { GrDocument } from 'react-icons/gr';
import { FaPlus } from 'react-icons/fa';
import { PLACEHOLDERS } from '@/constants/Placeholders';

export const FileUpload = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const handleFileName = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    }
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex h-184 w-full shrink-0 items-center justify-center rounded-12 bg-white"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <button
        className="inline-flex flex-col items-center justify-center gap-8"
        onClick={() => fileUploadRef.current?.click()}
      >
        {fileName ? (
          <GrDocument className="size-24 text-slate-400" />
        ) : (
          <FaPlus className="size-24 text-slate-400" />
        )}
        <span className="text-sm-normal text-slate-400 sm:text-base-normal">
          {fileName ? fileName : PLACEHOLDERS.FILE}
        </span>
      </button>
      <input
        id="file-input"
        ref={fileUploadRef}
        className="hidden"
        type={'file'}
        accept="image/*"
        onChange={handleFileName}
      />
    </motion.div>
  );
};
