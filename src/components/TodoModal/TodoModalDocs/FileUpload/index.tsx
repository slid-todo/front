import { ChangeEvent, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { todoModalVariants } from '@/utils/motionVariants';
import { FileUploadBtn } from './FileUploadBtn';

export const FileUpload = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const handleFileName = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    }
  };

  return (
    <motion.div
      className="flex h-184 w-full shrink-0 items-center justify-center rounded-12 bg-white"
      variants={todoModalVariants}
      initial="hidden"
      animate="visible"
    >
      <FileUploadBtn
        fileName={fileName}
        onClick={() => fileUploadRef.current?.click()}
      />
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
