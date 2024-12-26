'use client';

import { ChangeEvent, useRef } from 'react';

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
