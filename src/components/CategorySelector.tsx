import React from 'react';
import { ChevronDown } from 'lucide-react';

interface CategorySelectorProps {
  selectedCommandSet: 'all' | 'ideavim' | 'leader' | 'vim' | 'vimium';
  selectedCategory: string;
  categories: string[];
  handleCommandSetChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCommandSet,
  selectedCategory,
  categories,
  handleCommandSetChange,
  handleCategoryChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full">
      <div className="select-container w-full sm:w-48 relative">
        <select
          id="commandSet"
          value={selectedCommandSet}
          onChange={handleCommandSetChange}
          className="select w-full bg-white dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm px-3 py-2 pr-8 rounded-lg appearance-none"
        >
          <option value="all">All Commands</option>
          <option value="ideavim">IdeaVim Commands</option>
          <option value="leader">LeaderKey Commands</option>
          <option value="vim">Vim Commands</option>
          <option value="vimium">Vimium Commands</option>
        </select>
        <ChevronDown className="select-icon w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      <div className="select-container w-full sm:w-48 relative">
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="select w-full bg-white dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm px-3 py-2 pr-8 rounded-lg appearance-none"
        >
          <option value="All">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <ChevronDown className="select-icon w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
};

export default CategorySelector;
