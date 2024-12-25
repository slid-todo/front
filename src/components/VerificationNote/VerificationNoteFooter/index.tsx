'use client';

import { useEffect, useState } from 'react';
import { FaLink } from 'react-icons/fa';
import { useVerificationNoteStore } from '@/store/useVerificationNoteStore';

export const VerificationNoteFooter = () => {
  const {
    note,
    imageUrl,
    completePicName,
    completeLink,
    completeId,
    setImageUrl,
    setCompletePicName,
    setNote,
    setCompleteLink,
    setCompleteId,
  } = useVerificationNoteStore();

  // 로컬 스토리지에 이미 저장된 내용이 있는지 여부
  const [isSaved, setIsSaved] = useState(false);

  // 컴포넌트 마운트 시점에 한번 확인
  useEffect(() => {
    const savedData = localStorage.getItem('verificationNote');
    if (savedData) {
      setIsSaved(true);
    }
  }, []);

  const handleSaveOrLoad = () => {
    if (isSaved) {
      // 이미 저장된 데이터가 있으므로 '불러오기' 로직
      if (window.confirm('임시 저장된 내용을 불러오시겠습니까?')) {
        const savedData = localStorage.getItem('verificationNote');
        if (savedData) {
          const parsedData = JSON.parse(savedData);

          // store 업데이트
          setImageUrl(parsedData.imageUrl);
          setCompletePicName(parsedData.completePicName);
          setNote(parsedData.note);
          setCompleteLink(parsedData.completeLink);
          setCompleteId(parsedData.completeId);

          // 불러오기를 완료하면 로컬 스토리지에서 삭제
          localStorage.removeItem('verificationNote');
          setIsSaved(false);

          console.log('임시 저장된 내용이 불러와졌습니다!');
        }
      }
    } else {
      // 저장된 데이터가 없으므로 '임시저장' 로직
      if (window.confirm('내용을 임시저장하시겠습니까?')) {
        const dataToSave = {
          imageUrl,
          completePicName,
          note,
          completeLink,
          completeId,
        };

        localStorage.setItem('verificationNote', JSON.stringify(dataToSave));
        console.log('임시 저장 되었습니다!');
        setIsSaved(true); // 이제 저장된 상태로 표시
      }
    }
  };

  return (
    <div className="mt-auto flex w-full items-center justify-between bg-custom-white-200 p-16">
      <div className="flex items-center gap-8">
        <FaLink className="size-24 text-primary-100" />
        <span className="text-sm-medium text-primary-100">임베드</span>
      </div>
      <div className="flex items-center gap-16">
        <div>
          <span
            className={`text-xs-medium ${
              note.length > 100 ? 'text-error' : 'text-custom-gray-300'
            } `}
          >
            {note.length}
          </span>
          <span className="text-xs-medium text-custom-gray-300">/100</span>
        </div>
        <span
          className="cursor-pointer text-sm-medium text-primary-100"
          onClick={handleSaveOrLoad}
        >
          {isSaved ? '불러오기' : '임시저장'}
        </span>
      </div>
    </div>
  );
};
