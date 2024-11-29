interface DropdownProps {
  dropdownData: string[];
}

export const Dropdown = ({ dropdownData }: DropdownProps) => {
  return (
    <ul className="absolute top-full inline-flex max-h-150 w-full flex-col items-start overflow-y-auto rounded-12 bg-white shadow-lg">
      <style jsx>{`
        ul::-webkit-scrollbar {
          width: 0px; /* 스크롤바 너비를 0으로 설정 */
        }
        ul {
          scrollbar-width: thin; /* Firefox에서 스크롤바를 얇게 설정 */
          scrollbar-color: transparent transparent; /* 스크롤바 색상을 투명으로 설정 */
        }
      `}</style>
      {dropdownData.map((item) => {
        return (
          <li
            className="flex-center mt-2 w-full cursor-pointer rounded-12 p-10 text-sm-normal hover:bg-slate-200 sm:text-lg-normal"
            key={item}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
