import { cn } from '@/utils/className';

interface EmptyStateTextProps {
  text: string;
  classNeme?: string;
}

export const EmptyStateText = ({ text, classNeme }: EmptyStateTextProps) => {
  const textClass = cn(
    'text-center !text-sm-normal text-custom-gray-200',
    classNeme,
  );
  return <p className={textClass}>{text}</p>;
};
