import { ChangeEvent, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { FaTrashCan } from 'react-icons/fa6';
import { todoModalVariants } from '@/constants/motionVariants';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { FileUploadBtn } from './FileUploadBtn';

export const FileUpload = () => {
  const { todoData, setTodoData, resetFile } = useTodoDataStore();
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const handleFileName = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setTodoData({ imageName: selectedFile.name });
      encodeFileToBase64(selectedFile);
    }
  };

  const encodeFileToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setTodoData({ imageEncodedBase64: reader.result as string });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteImage = () => {
    resetFile();
  };

  return (
    <motion.div
      className="flex-center h-184 w-full shrink-0  rounded-12 bg-white"
      variants={todoModalVariants}
      initial="hidden"
      animate="visible"
    >
      {todoData.imageEncodedBase64 ? (
        <div className="relative size-full rounded-12">
          <Image
            src={todoData.imageEncodedBase64}
            width={200}
            height={200}
            alt="preview"
            priority
            className="size-full rounded-12 object-cover"
            onClick={() => fileUploadRef.current?.click()}
          />
          <FaTrashCan
            className="absolute right-2 top-2 size-30 cursor-pointer text-error"
            onClick={handleDeleteImage}
          />
        </div>
      ) : (
        <FileUploadBtn onClick={() => fileUploadRef.current?.click()} />
      )}
      <input
        id="file-input"
        ref={fileUploadRef}
        className="hidden"
        type={'file'}
        accept="image/jpeg, image/jpg, image/png"
        onChange={handleFileName}
      />
    </motion.div>
  );
};
