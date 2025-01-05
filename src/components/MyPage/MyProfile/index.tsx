'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MdEdit } from 'react-icons/md';
import { useUserQuery } from '@/hooks/apis/useUserQuery';
import { useModifyProfilePic } from '@/hooks/apis/Auth/useModifyProfilePic';
import { Skeleton } from '@/components/common/Skeleton';

export const MyProfile = () => {
  const { name, email, profile, isLoading } = useUserQuery();

  const fileUploadRef = useRef<HTMLInputElement>(null);

  const [profilePicName, setProfilePicName] = useState<string>('');
  const [profilePicBase64, setProfilePicBase64] = useState<string>('');

  const { mutate: modifyProfilePic } = useModifyProfilePic();

  useEffect(() => {
    if (profilePicBase64 && profilePicName) {
      modifyProfilePic({ profilePicName, profilePicBase64 });
    }
  }, [profilePicBase64, profilePicName, modifyProfilePic]);

  const handleFileName = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setProfilePicName(selectedFile.name);
      encodeFileToBase64(selectedFile);
    }
  };

  const encodeFileToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setProfilePicBase64(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex-center mt-16 flex-col gap-16">
      <div className="relative flex">
        {!isLoading ? (
          profile ? (
            <Image
              width={123}
              height={123}
              sizes="100vw"
              className="size-123 rounded-23 bg-custom-white-200"
              alt="프로필 사진"
              priority
              src={profile}
            />
          ) : (
            <div className="flex-center size-123 rounded-23 bg-gray-300">
              <span className="text-sm text-gray-600">No Image</span>
            </div>
          )
        ) : (
          <Skeleton className="flex-center size-123 rounded-23 bg-gray-300" />
        )}
        <div className="flex-center absolute bottom-0 right-[-20px] size-35  rounded-23 bg-custom-white-300 ">
          <MdEdit
            width={50}
            height={50}
            className="size-25 cursor-pointer text-primary-100"
            onClick={() => fileUploadRef.current?.click()}
          />
          <input
            id="file-input"
            ref={fileUploadRef}
            className="hidden"
            type={'file'}
            accept="image/jpeg, image/jpg, image/png"
            onChange={handleFileName}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <span className="text-base-semibold">{name}</span>
        <span className="text-xs-normal">{email}</span>
      </div>
    </div>
  );
};
