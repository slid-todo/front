import { useState } from 'react';

import Image from 'next/image';

import { Skeleton } from '@/components/common/Skeleton';

interface TodoItemProps {
  index: number;
  color: string;
  pic: string;
}

export const TodoPic = ({ index, color, pic }: TodoItemProps) => {
  const [isLoaded, setIsLoaded] = useState(pic === '' || false);

  return (
    <div
      className="flex-center relative aspect-square rounded-16"
      style={{ backgroundColor: color }}
    >
      {!isLoaded && pic && (
        <Skeleton className="absolute inset-0 size-full rounded-16" />
      )}
      {pic && (
        <Image
          src={pic}
          fill
          alt="인증 사진"
          onLoad={() => setIsLoaded(true)}
          className="rounded-16 object-cover"
        />
      )}
      {index + 1}
    </div>
  );
};
