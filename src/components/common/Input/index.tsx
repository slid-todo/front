import { forwardRef } from 'react';

import { cn } from '@/utils/className';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    const inputClass = cn(
      'w-full px-24 py-12 outline-none bg-white rounded-12 text-sm-normal md:text-base-normal',
      className,
    );

    return <input ref={ref} type={type} className={inputClass} {...props} />;
  },
);

Input.displayName = 'Input';
