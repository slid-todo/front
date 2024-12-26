// src/hooks/useFilePicker.ts
'use client';

import { ChangeEvent, useRef } from 'react';

/**
 * @param onSelect 파일 선택 후 실행할 콜백 (base64, 확장자)
 * @param captureMode 모바일 촬영 시 'environment' 등 지정 가능
 */

export function useFilePicker(
  onSelect: (imageUrl: string, imageExtension: string) => void,
  captureMode?: string,
) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const fileName = file.name;
    const extension = fileName.split('.').pop() || 'png';

    const reader = new FileReader();
    reader.onload = () => {
      const base64URL = reader.result as string;
      onSelect(base64URL, extension);
    };

    reader.readAsDataURL(file);
  };

  return {
    fileInputRef,
    openFileDialog,
    handleChange,
    captureMode,
  };
}
