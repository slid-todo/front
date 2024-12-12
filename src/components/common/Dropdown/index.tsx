import { motion } from 'motion/react';
import { dropdownVariants } from '@/constants/motionVariants';

interface DropdownProps<T> {
  dropdownData: T[];
  onSelectItem: (item: T) => void;
  isOpenDropdown: boolean;
  renderItem: (item: T) => JSX.Element;
}

/**
 * 재사용 가능한 드롭다운 컴포넌트로, 아이템 목록을 표시하고 사용자가 하나를 선택할 수 있습니다.
 *
 * 드롭다운 항목은 `dropdownData`를 통해 전달되며, 드롭다운의 열림/닫힘 상태는 `isOpenDropdown` prop으로 제어됩니다.
 * `renderItem` prop을 사용하면 각 항목의 렌더링 방식을 커스터마이징할 수 있습니다.
 *
 * 항목을 클릭하면 `onSelectItem` 콜백이 선택된 항목과 함께 호출됩니다.
 *
 * @param {T[]} dropdownData - 드롭다운에 표시할 항목 배열입니다. 각 항목은 제네릭 타입 `T`로 정의됩니다.
 *
 *
 * @param {(item: T) => void} onSelectItem - 항목이 선택되었을 때 호출되는 콜백 함수입니다.
 *
 *
 * @param {boolean} isOpenDropdown - 드롭다운의 가시성을 제어하는 불리언 값입니다. `true`이면 열리고, `false`이면 닫힙니다.
 *
 *
 * @param {(item: T) => JSX.Element} renderItem - 각 항목의 렌더링 방식을 커스터마이징하는 함수입니다. 제네릭 타입 `T`의 항목을 받아 JSX를 반환합니다.
 * @returns {JSX.Element} JSX 요소로 된 드롭다운 메뉴를 반환하며, 이는 항목 목록을 포함합니다.
 */

export const Dropdown = <T extends object>({
  dropdownData,
  onSelectItem,
  isOpenDropdown,
  renderItem,
}: DropdownProps<T>) => {
  const handleClickItem = (item: T) => {
    onSelectItem(item);
  };

  return (
    <motion.ul
      initial="closed"
      animate={isOpenDropdown ? 'open' : 'closed'}
      variants={dropdownVariants}
      className="absolute top-full z-20 inline-flex max-h-150 w-full origin-top flex-col items-start overflow-y-auto rounded-b-12 bg-white shadow-lg scrollbar-hide"
    >
      {dropdownData.map((item, index) => (
        <li
          key={index}
          className="flex-center mt-2 w-full cursor-pointer border-b-2 border-gray-100 p-10 text-sm-normal hover:bg-slate-200 sm:text-base-normal"
          onClick={() => handleClickItem(item)}
        >
          {renderItem(item)}
        </li>
      ))}
    </motion.ul>
  );
};
