import { cn } from '@/utils/className';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  primary?: boolean;
  radius?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({
  size = 'medium',
  primary = false,
  radius = false,
  disabled = false,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const className = cn(
    'inline-flex items-center justify-center',
    {
      'text-sm py-1 px-2': size === 'small',
      'text-base py-2 px-4': size === 'medium',
      'text-lg py-3 px-6': size === 'large',
    },
    radius ? 'rounded-xl' : 'rounded-3xl',
    primary
      ? 'bg-blue-500 text-white'
      : 'bg-white text-blue-500 border border-blue-500',
    disabled && 'opacity-50 cursor-not-allowed',
  );

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
