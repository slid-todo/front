import { ChangeEvent, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { todoModalVariants } from '@/constants/motionVariants';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { FileUploadBtn } from './FileUploadBtn';

export const FileUpload = () => {
  const { todoData, setTodoData } = useTodoDataStore();
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

  return (
    <motion.div
      className="flex-center h-184 w-full shrink-0  rounded-12 bg-white"
      variants={todoModalVariants}
      initial="hidden"
      animate="visible"
    >
      {todoData.imageEncodedBase64 ? (
        <Image
          src={todoData.imageEncodedBase64}
          width={200}
          height={200}
          alt="preview"
          className="size-full rounded-12 object-cover"
          onClick={() => fileUploadRef.current?.click()}
        />
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
