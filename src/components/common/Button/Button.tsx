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
      'text-sm-medium py-8 px-18': size === 'small',
      'text-sm-medium py-12 px-52': size === 'medium',
      'text-base-medium py-12 w-full': size === 'large',
    },
    radius ? 'rounded-xl' : 'rounded-3xl',
    disabled
      ? primary
        ? 'bg-slate-400 text-white cursor-not-allowed'
        : 'bg-slate-300 text-slate-500 border border-slate-500 cursor-not-allowed'
      : primary
        ? 'bg-primary-100 text-white'
        : 'bg-white text-primary-100 border border-primary-100',
  );

  return (
    <>
      <button
        className={className}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
      <div className=""></div>
    </>
  );
};
