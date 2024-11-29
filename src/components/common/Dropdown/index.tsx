interface DropdownProps {
  dropdownData: string[];
  onSelectItem: (item: string) => void; // 콜백 함수 추가
}

/**
 * Dropdown 컴포넌트
 *
 * 사용자가 선택할 수 있는 항목들이 표시되는 드롭다운 메뉴입니다.
 * 이 컴포넌트는 `dropdownData`로 전달된 항목들을 리스트 형식으로 표시하며,
 * 각 항목을 클릭할 때 `onSelectItem` 콜백 함수가 실행됩니다.
 *
 * `dropdownData`는 드롭다운에 표시할 항목들을 담은 문자열 배열이며,
 * `onSelectItem`은 항목이 선택되었을 때 호출되는 콜백 함수입니다.
 *
 * 추가적으로, 드롭다운 메뉴는 스크롤이 가능하며, 선택된 항목에 대한 스타일링을 제공합니다.
 * 메뉴 항목을 클릭하면 해당 항목이 선택되어, `onSelectItem` 함수로 전달됩니다.
 *
 *
 * @component
 *
 * @param {string[]} dropdownData - 드롭다운에 표시될 항목들을 담은 배열
 *
 * @param {(item: string) => void} onSelectItem - 항목이 선택되었을 때 호출되는 콜백 함수
 *
 * @returns {JSX.Element} 드롭다운 메뉴 JSX 출력
 */

export const Dropdown = ({ dropdownData, onSelectItem }: DropdownProps) => {
  const handleClickItem = (item: string) => {
    onSelectItem(item);
  };

  return (
    <ul className="absolute top-full inline-flex max-h-150 w-full flex-col items-start overflow-y-auto rounded-12 bg-white shadow-lg">
      <style jsx>{`
        ul::-webkit-scrollbar {
          width: 0px; /* 스크롤바 너비를 0으로 설정 */
        }
        ul {
          scrollbar-width: none; /* Firefox에서 스크롤바를 얇게 설정 */
          scrollbar-color: transparent transparent; /* 스크롤바 색상을 투명으로 설정 */
        }
      `}</style>
      {dropdownData.map((item) => {
        return (
          <li
            className="flex-center mt-2 w-full cursor-pointer rounded-12 p-10 text-sm-normal hover:bg-slate-200 sm:text-lg-normal"
            key={item}
            onClick={() => handleClickItem(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
