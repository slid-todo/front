import { motion } from 'motion/react';
import { dropdownVariants } from '@/constants/motionVariants';

interface DropdownProps {
  dropdownData: string[];
  onSelectItem: (item: string) => void; // 콜백 함수 추가
  isOpenDropdown: boolean;
}

/**
 * Dropdown 컴포넌트
 *
 * 사용자가 선택할 수 있는 항목들이 표시되는 드롭다운 메뉴 컴포넌트입니다.
 *
 * `dropdownData`로 전달된 항목들을 리스트로 렌더링하며,
 * 각 항목을 클릭하면 `onSelectItem` 콜백 함수가 호출됩니다.
 *
 * 드롭다운은 스크롤 가능하며, 선택된 항목은 시각적으로 구분됩니다.
 *
 * `isOpenDropdown` prop을 통해 드롭다운의 열림/닫힘 상태를 제어할 수 있습니다.
 *
 *
 * @component
 *
 * @param {string[]} dropdownData - 드롭다운에 표시될 항목들을 담은 배열
 *
 * @param {(item: string) => void} onSelectItem - 항목이 선택되었을 때 호출되는 콜백 함수
 *
 * @param {boolean} isOpenDropdown - 드롭다운의 열림(true) 또는 닫힘(false) 상태를 제어하는 불리언 값.
 *
 * @returns {JSX.Element} 드롭다운 메뉴 JSX 출력
 */

export const Dropdown = ({
  dropdownData,
  onSelectItem,
  isOpenDropdown,
}: DropdownProps) => {
  const handleClickItem = (item: string) => {
    onSelectItem(item);
  };

  return (
    <motion.ul
      initial="closed"
      animate={isOpenDropdown ? 'open' : 'closed'}
      variants={dropdownVariants}
      className="absolute top-full z-20 inline-flex max-h-150 w-full origin-top flex-col items-start overflow-y-auto rounded-b-12 bg-white shadow-lg scrollbar-hide"
    >
      {dropdownData.map((item) => {
        return (
          <li
            className="flex-center mt-2 w-full cursor-pointer border-b-2 border-gray-100 p-10 text-sm-normal hover:bg-slate-200 sm:text-base-normal"
            key={item}
            onClick={() => handleClickItem(item)}
          >
            {item}
          </li>
        );
      })}
    </motion.ul>
  );
};
