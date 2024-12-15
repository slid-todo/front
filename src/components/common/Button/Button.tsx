import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/className';
import { Spinner } from '../Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  primary?: boolean;
  radius?: boolean;
  disabled?: boolean;
  pending?: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

export const Button = ({
  size = 'medium',
  primary = true,
  radius = true,
  disabled = false,
  pending = false,
  onClick,
  className,
  children,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || pending;

  const ButtonClassName = cn(
    'inline-flex items-center justify-center transition-all duration-300 h-46 max-h-46 relative',
    {
      'text-sm-medium py-8 px-18': size === 'small',
      'text-sm-medium py-12 px-52': size === 'medium',
      'text-base-medium py-12 px-52 w-full': size === 'large',
    },
    radius ? 'rounded-xl' : 'rounded-3xl',
    isDisabled
      ? primary
        ? 'bg-custom-white-300 text-white cursor-not-allowed'
        : 'bg-white text-custom-white-300 border border-custom-white-300 cursor-not-allowed'
      : primary
        ? 'bg-primary-100 text-white hover:bg-primary-200'
        : 'bg-white text-primary-100 border border-primary-100 hover:text-primary-200',
    className,
  );

  return (
    <button
      className={ButtonClassName}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      <span className={cn(pending && 'invisible')}>{children}</span>
      {pending && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </span>
      )}
    </button>
  );
};
