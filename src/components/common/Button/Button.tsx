import { cn } from '@/utils/className';
import { Spinner } from '../Spinner';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  primary?: boolean;
  radius?: boolean;
  disabled?: boolean;
  pending?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({
  size = 'medium',
  primary = false,
  radius = false,
  disabled = false,
  pending = false,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || pending;

  const className = cn(
    'inline-flex items-center justify-center transition-all duration-300 h-46 max-h-46',
    {
      'text-sm-medium py-8 px-18': size === 'small',
      'text-sm-medium py-12 px-52': size === 'medium',
      'text-base-medium py-12 w-full': size === 'large',
    },
    radius ? 'rounded-xl' : 'rounded-3xl',
    isDisabled
      ? primary
        ? 'bg-slate-400 text-white cursor-not-allowed'
        : 'bg-slate-300 text-slate-500 border border-slate-500 cursor-not-allowed'
      : primary
        ? 'bg-primary-100 text-white hover:bg-primary-200'
        : 'bg-white text-primary-100 border border-primary-100 hover:text-primary-200',
  );

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {pending ? <Spinner /> : children}
    </button>
  );
};
