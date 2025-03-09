import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProgressControlsProps {
  currentCardIndex: number;
  filteredCardsLength: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

const ProgressControls: React.FC<ProgressControlsProps> = ({
  currentCardIndex,
  filteredCardsLength,
  handlePrevious,
  handleNext,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-4 sm:mb-8 px-2 sm:px-4">
      <div className="w-full sm:w-auto flex gap-2 sm:gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
          className={`btn flex-1 sm:flex-none ${
            currentCardIndex === 0
              ? 'bg-gray-200 cursor-not-allowed'
              : 'btn-outline border-gray-200 text-gray-700'
          }`}
        >
          <ChevronLeft size={16} className="sm:size-5" /> 
          <span className="hidden sm:inline">Previous</span>
        </button>

        <button
          onClick={handleNext}
          disabled={currentCardIndex === filteredCardsLength - 1}
          className={`btn flex-1 sm:flex-none ${
            currentCardIndex === filteredCardsLength - 1
              ? 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed dark:text-white'
              : 'btn-outline border-gray-200 dark:border-gray-700 text-gray-700'
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={16} className="sm:size-5" />
        </button>
      </div>

      <span className="text-gray-600 dark:text-gray-400 font-medium text-xs sm:text-base bg-gray-50 dark:bg-gray-800 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
        {currentCardIndex + 1} of {filteredCardsLength}
      </span>
    </div>
  );
};

export default ProgressControls;
