import { FaCheck } from 'react-icons/fa6';

import { cn } from '@/utils/className';

const chipStyles = {
  base: 'flex items-center gap-7 rounded-8 p-8 pl-12 transition-all duration-200 ease-in-out',
  variant: {
    default: 'bg-white !text-black',
    active: 'bg-primary-100 !text-white',
  },
  size: {
    sm: 'text-sm-medium',
    lg: 'text-base-medium',
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
 * 이 컴포넌트는 `variant`와 `size`를 통해 다양한 상태와 스타일을 제공하며,
 * 버튼 안에 자식 요소(`children`)를 포함할 수 있습니다.
 *
 * `variant` 값에 따라 버튼이 기본 상태(`default`) 또는 활성화 상태(`active`)를 가질 수 있으며,
 * 활성화 상태에서는 체크 아이콘이 표시됩니다.
 * 크기(`size`) 옵션을 통해 작은 크기(`sm`)와 큰 크기(`lg`)를 선택할 수 있습니다.
 *
 * 추가적으로, 버튼 속성(`onClick`, `disabled` 등)을 전달하여 HTML 버튼의 기본 기능을 사용할 수 있습니다.
 *
 * @component
 * @example
 * // 기본 상태 버튼
 * <Chip variant="default" size="sm">Default Chip</Chip>
 *
 * // 활성화 상태 버튼
 * <Chip variant="active" size="lg">Active Chip</Chip>
 *
 * @returns {JSX.Element} Chip 컴포넌트의 JSX 출력
 */

export const Chip = ({
  className,
  variant = 'default',
  size = 'sm',
  children,
  ...props
}: ChipProps) => {
  const chipClass = cn(
    chipStyles.base,
    chipStyles.variant[variant],
    chipStyles.size[size],
    className,
  );

  const checkBoxClass = cn(
    'bg-white size-18 rounded-6',
    variant === 'default' && 'border border-custom-white-200',
  );

  return (
    <button className={chipClass} {...props}>
      <div className={checkBoxClass}>
        {variant === 'active' && (
          <FaCheck
            className="size-18 p-2 text-primary-100"
            style={{ strokeWidth: 30 }}
          />
        )}
      </div>
      {children}
    </button>
  );
};
