interface DropdownProps {
  dropdownData: string[];
}

export const Dropdown = ({ dropdownData }: DropdownProps) => {
  return (
    <ul className="absolute inline-flex w-full flex-col items-start rounded-12 bg-white shadow-lg">
      {dropdownData.map((item) => {
        return (
          <li
            className="flex-center w-full p-10 text-sm-normal hover:bg-slate-200 sm:text-lg-normal"
            key={item}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
