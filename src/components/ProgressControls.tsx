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
    <div className="flex justify-between items-center mb-8">
      <button
        onClick={handlePrevious}
        disabled={currentCardIndex === 0}
        className={`btn ${currentCardIndex === 0 ? 'bg-gray-200 cursor-not-allowed' : 'btn-outline border-gray-200 text-gray-700'}`}
      >
        <ChevronLeft size={20} /> Previous
      </button>

      <span className="text-gray-600 font-medium">
        {currentCardIndex + 1} of {filteredCardsLength}
      </span>

      <button
        onClick={handleNext}
        disabled={currentCardIndex === filteredCardsLength - 1}
        className={`btn ${currentCardIndex === filteredCardsLength - 1 ? 'bg-gray-200 cursor-not-allowed' : 'btn-outline border-gray-200 text-gray-700'}`}
      >
        Next <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ProgressControls;
