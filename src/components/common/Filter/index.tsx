import { useState } from 'react';
import { motion } from 'motion/react';

interface FilterProps {
  filters: string[];
  className?: string;
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
 * const [currentFilter, setCurrentFilter] = useState<string>('All');
 *
 * const handleFilterChange = (filter: string) => {
 *   setCurrentFilter(filter);
 * };
 *
 * <Filter filters={['All', 'To Do', 'Completed', 'In Progress']} onFilterChange={handleFilterChange} />
 *
 * @author 배영준
 */

export const Filter = (props: FilterProps) => {
  const { filters, className = '', onFilterChange } = props;
  const [selectedFilter, setSelectedFilter] = useState<string>(filters[0]);

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className={`flex ${className}`}>
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          whileTap={{ scale: 0.9 }}
          animate={{
            backgroundColor: selectedFilter === filter ? '#536894' : '#FFFFFF',
            color: selectedFilter === filter ? '#ffffff' : '#1E293B',
            borderColor: selectedFilter === filter ? '#536894' : '#e2e8f0',
          }}
          transition={{ duration: 0.3 }}
          className="flex h-28 items-center gap-10 rounded-full border border-solid px-12 py-4 text-sm-medium"
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
};
