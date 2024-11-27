import HeartIcon from '@/assets/icon-heart.svg';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * 버튼 컴포넌트
 *
 * 이 컴포넌트는 다양한 스타일과 크기를 가진 버튼을 생성합니다.
 * `primary` 여부에 따라 스타일이 다르게 적용되며, Tailwind CSS를 사용하여 구현되었습니다.
 *
 * @component
 * @param {Object} props - 버튼에 전달되는 속성
 * @param {boolean} [props.primary=false] - 버튼의 주요(primary) 스타일 여부를 결정합니다. `true`이면 primary 스타일, `false`이면 secondary 스타일이 적용됩니다.
 * @param {string} [props.backgroundColor] - 버튼의 배경색을 사용자 지정합니다. (Tailwind 스타일을 덮어씁니다.)
 * @param {'small'|'medium'|'large'} [props.size='medium'] - 버튼의 크기를 설정합니다. 기본값은 'medium'입니다.
 * @param {string} props.label - 버튼에 표시될 텍스트입니다.
 * @param {function} [props.onClick] - 버튼 클릭 시 호출될 콜백 함수입니다.
 * @returns {JSX.Element} 렌더링된 버튼 컴포넌트
 *
 * @example
 * // 기본 사용법
 * <Button label="Click me" />
 *
 * @example
 * // Primary 스타일과 사용자 정의 배경색 적용
 * <Button primary backgroundColor="red" label="Primary Button" />
 *
 * @example
 * // 다양한 크기와 클릭 이벤트 핸들러 사용
 * <Button size="large" onClick={() => console.log('버튼 클릭!')} label="Large Button" />
 */

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const baseStyle = `inline-block cursor-pointer border-1 border-black rounded-full font-bold`;
  const modeStyle = primary ? `bg-white` : `bg-blue-300`;
  const sizeStyle = {
    small: `py-2 px-4 text-xs`,
    medium: `py-2.5 px-5 text-sm`,
    large: `py-3 px-6 text-base`,
  }[size];

  return (
    <button
      type="button"
      className={`${baseStyle} ${modeStyle} ${sizeStyle} `}
      style={{ backgroundColor }}
      {...props}
    >
      <HeartIcon width="32" height="32" fill="#FF0000" />
      {label}
    </button>
  );
};
