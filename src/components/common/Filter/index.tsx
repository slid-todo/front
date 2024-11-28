import { useState } from 'react';

interface FilterProps {
  filters: string[];
  onFilterChange: (filter: string) => void;
}

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
