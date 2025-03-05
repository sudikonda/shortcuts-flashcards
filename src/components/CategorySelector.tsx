import React from 'react';
import { ChevronDown } from 'lucide-react';

interface CategorySelectorProps {
  selectedCommandSet: 'all' | 'idea' | 'leader' | 'vim' | 'vimium';
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
    <div className="flex items-center gap-6 w-full sm:w-auto">
      <div className="select-container w-full sm:w-48">
        <select
          id="commandSet"
          value={selectedCommandSet}
          onChange={handleCommandSetChange}
          className="select bg-white dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        >
          <option value="all">All Commands</option>
          <option value="idea">IdeaVim Commands</option>
          <option value="leader">LeaderKey Commands</option>
          <option value="vim">Vim Commands</option>
          <option value="vimium">Vimium Commands</option>
        </select>
        <ChevronDown className="select-icon w-5 h-5 text-gray-400 dark:text-gray-500" />
      </div>

      <div className="select-container w-full sm:w-48">
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="select bg-white dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        >
          <option value="All">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <ChevronDown className="select-icon w-5 h-5 text-gray-400 dark:text-gray-500" />
      </div>
    </div>
  );
};

export default CategorySelector;
