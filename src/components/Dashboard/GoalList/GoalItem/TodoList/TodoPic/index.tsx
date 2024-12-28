import { useState } from 'react';

import Image from 'next/image';

import { Skeleton } from '@/components/common/Skeleton';
import { cn } from '@/utils/className';

interface TodoItemProps {
  index: number;
  color: string;
  pic: string;
  status: string;
  date: string;
}

export const TodoPic = ({ index, color, pic, status, date }: TodoItemProps) => {
  const [isLoaded, setIsLoaded] = useState(pic === '' || false);
  const today = new Date().setHours(0, 0, 0, 0);
  const thisDay = new Date(date).setHours(0, 0, 0, 0);
  const isPast = today > thisDay;
  const backgroundColor =
    status === '인증' ? color : isPast ? '#E9E9E9' : color;
  const textClass = cn(
    'z-10 !text-base-medium',
    isPast && 'text-custom-gray-100',
  );

  return (
    <div
      className="flex-center relative aspect-square rounded-16"
      style={{ backgroundColor: backgroundColor }}
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
          className="rounded-16 object-cover opacity-50"
        />
      )}
      <span className={textClass}>{index + 1}</span>
    </div>
  );
};
