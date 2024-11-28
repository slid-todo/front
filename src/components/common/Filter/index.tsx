import { useState } from 'react';

interface FilterProps {
  filters: string[];
  onFilterChange: (filter: string) => void;
}

/**
 * 필터 컴포넌트는 필터 버튼 목록을 표시합니다.
 *
 * @param {Object} props - 컴포넌트 속성.
 * @param {string[]} props.filters - 필터 옵션 목록.
 * @param {function} props.onFilterChange - 필터가 선택될 때 호출되는 콜백 함수.
 *
 * @example
 * // 사용 예시
 *
 *   const [currentFilter, setCurrentFilter] = useState<string>('All');
 *
 *   const handleFilterChange = (filter: string) => {
 *     setCurrentFilter(filter);
 *     console.log('Selected filter:', filter);
 *   };
 *
 *   return (
 *       <Filter filters={['All', 'To Do', 'Completed', 'In Progress']} onFilterChange={handleFilterChange} />
 *       <div className="mt-4">
 *         <p>현재 선택된 필터: {currentFilter}</p>
 *       </div>
 *     </div>
 *   );
 * };
 *
 */

export const Filter = (props: FilterProps) => {
  const { filters, onFilterChange } = props;
  const [selectedFilter, setSelectedFilter] = useState<string>(filters[0]);

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex space-x-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={`rounded-full px-4 py-2 ${
            selectedFilter === filter
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
