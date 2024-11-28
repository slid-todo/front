import React from 'react';
import { FaCheck } from 'react-icons/fa6';

import { cn } from '@/utils/className';

const chipStyles = {
  base: 'flex items-center gap-7 rounded-8 p-8 pl-12 transition-all duration-200 ease-in-out',
  variant: {
    default: 'bg-slate-100 !text-black',
    active: 'bg-slate-900 !text-white',
  },
  size: {
    sm: 'text-sm font-medium',
    lg: 'text-base font-medium',
  },
};

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof chipStyles.variant;
  size?: keyof typeof chipStyles.size;
}

/**
 * Chip 컴포넌트
 *
 * 체크 표시가 가능한 버튼 형태의 UI 컴포넌트입니다.
 * 버튼은 기본 상태(default)와 활성화 상태(active)를 지원하며,
 * 크기 설정을 통해 다양한 스타일을 적용할 수 있습니다.
 *
 * @component
 * @example
 * <Chip variant="default" size="sm">Default Chip</Chip>
 * <Chip variant="active" size="lg">Active Chip</Chip>
 *
 * @param {Object} props - 버튼에 전달되는 속성
 * @param {'default' | 'active'} [props.variant='default'] - 버튼의 상태를 결정하는 variant 값
 *    - 'default': 기본 상태
 *    - 'active': 활성화된 상태로 체크 표시가 나타남
 * @param {'sm' | 'lg'} [props.size='sm'] - 버튼의 크기 설정
 *    - 'sm': 작은 크기
 *    - 'lg': 큰 크기
 * @param {React.ReactNode} props.children - 버튼에 표시될 텍스트나 다른 JSX 요소
 * @param {React.ButtonHTMLAttributes} props.otherProps - 버튼의 HTML 속성들 (예: onClick, disabled 등)
 *
 * @returns {JSX.Element} - Chip 버튼 컴포넌트
 */

const Chip: React.FC<ChipProps> = ({
  className,
  variant = 'default',
  size = 'sm',
  children,
  ...props
}) => {
  const chipClass = cn(
    chipStyles.base,
    chipStyles.variant[variant],
    chipStyles.size[size],
    className,
  );

  return (
    <button className={chipClass} {...props}>
      <div className="size-18 rounded-6 border border-slate-200 bg-white">
        {variant === 'active' && <FaCheck className="size-16 text-blue-600" />}
      </div>
      {children}
    </button>
  );
};

export default Chip;
