import React from 'react';
import { Check, X } from 'lucide-react';

import { Flashcard } from '../App';

interface FlashcardDisplayProps {
  currentCard: Flashcard | undefined;
  flipped: boolean;
  practiceMode: boolean;
  showAnswer: boolean;
  isCardKnown: (id: number) => boolean;
  userInput: string;
  isCorrect: boolean | null;
  selectedCommandSet: 'all' | 'ideavim' | 'leader' | 'vim' | 'vimium';
  handleFlip: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkAnswer: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  getInputFeedbackClass: () => string;
  inputRef: React.RefObject<HTMLInputElement>;
}

const FlashcardDisplay: React.FC<FlashcardDisplayProps> = ({
  currentCard,
  flipped,
  practiceMode,
  showAnswer,
  isCardKnown,
  userInput,
  isCorrect,
  selectedCommandSet,
  handleFlip,
  handleInputChange,
  checkAnswer,
  handleKeyDown,
  getInputFeedbackClass,
  inputRef,
}) => {
  if (!currentCard) {
    return null;
  }

  return (
    <div className="animate-fadeIn px-1 sm:px-2">
      <div className={`perspective-1000 mb-2 sm:mb-8 ${isCardKnown(currentCard.id) ? 'ring-2 ring-success rounded-xl sm:rounded-2xl' : 'ring-2 ring-fuchsia-400 rounded-xl sm:rounded-2xl'}`}>
        <div className={`relative transition-transform duration-500 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
          <div className={`card bg-white dark:bg-gray-800 shadow-sm sm:shadow-lg dark:shadow-none ${flipped ? 'hidden' : ''}`} onClick={handleFlip}>
            <div className="card-header text-xs sm:text-base px-2 pt-2">{currentCard.parent}</div>
            <div className="card-subheading text-2xs sm:text-sm px-2">{currentCard.category}</div>

            {practiceMode ? (
              <div className="flex flex-col items-center px-2">
                <h2 className="text-base sm:text-2xl font-bold text-center mb-2 sm:mb-4 dark:text-white">What is the shortcut for:</h2>
                <div className="bg-indigo-50 dark:bg-indigo-900 p-2 sm:p-4 rounded-lg sm:rounded-xl mb-2 sm:mb-4 w-full">
                  <p className="text-sm sm:text-xl dark:text-white text-indigo-900 text-center">{currentCard.description}</p>
                </div>

                <div className="w-full max-w-lg px-2">
                  <div className="flex flex-row gap-1 sm:gap-2 mb-2 w-full">
                    <input
                      ref={inputRef}
                      type="text"
                      value={userInput}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder="Type the shortcut..."
                      className={`input ${getInputFeedbackClass()} w-[75%] text-sm sm:text-base`}
                      autoFocus
                    />
                    <button
                      id="check-button"
                      onClick={checkAnswer}
                      className="btn btn-primary dark:text-gray-900 w-[25%] text-sm sm:text-base"
                    >
                      Check
                    </button>
                  </div>

                  {isCorrect !== null && (
                    <div className={`p-2 rounded-lg sm:rounded-xl mb-2 ${isCorrect ? 'bg-green-50 dark:bg-green-500' : 'bg-red-50 dark:bg-red-900'}`}>
                      {isCorrect ? (
                        <p className="flex items-center text-success-hover dark:text-white text-xs sm:text-sm">
                          <Check size={14} className="mr-1 sm:mr-2" /> Correct! Well done.
                        </p>
                      ) : (
                        <div>
                          <p className="flex items-center text-danger mb-1 sm:mb-2 text-xs sm:text-sm">
                            <X size={14} className="mr-1 sm:mr-2" /> Not quite right. Try again or see the answer.
                          </p>
                          {showAnswer && (
                            <p className="font-mono bg-white px-2 py-1 rounded-lg text-xs sm:text-sm">
                              Answer: {currentCard.command}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="text-2xs sm:text-xs text-gray-500 px-2">
                    {selectedCommandSet === 'ideavim' ? (
                      <p>Tip: For leader key, type "space" or " "</p>
                    ) : selectedCommandSet === 'leader' ? (
                      <p>Tip: Type exact shortcut keys (e.g., "op")</p>
                    ) : selectedCommandSet === 'vimium' ? (
                      <p>Tip: Type exact shortcut keys (e.g., "j")</p>
                    ) : (
                      <p>Tip: Type exact vim command (e.g., "i")</p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center p-2 sm:p-4">
                <h2 className="text-base sm:text-2xl dark:text-white font-bold mb-1 sm:mb-2">{currentCard.command}</h2>
                {showAnswer && (
                  <p className="text-gray-600 dark:text-gray-300 italic text-xs sm:text-base">"{currentCard.description}"</p>
                )}
                <p className="text-gray-500 dark:text-gray-400 text-2xs sm:text-sm mt-1 sm:mt-2">Click to flip</p>
              </div>
            )}
          </div>

          <div className={`card bg-white dark:bg-gray-900 relative w-full inset-0 rotate-y-180 ${!flipped ? 'hidden' : ''}`} onClick={handleFlip}>
            <div className="card-header text-xs sm:text-base px-2 pt-2">{currentCard.category}</div>
            <div className="card-subheading text-2xs sm:text-sm px-2">{currentCard.parent}</div>
            <div className="text-center p-2 sm:p-4">
              <p className="text-sm sm:text-xl mb-1 sm:mb-2 dark:text-gray-300">{currentCard.description}</p>
              <div className="inline-block font-mono dark:text-gray-300 px-2 py-1 rounded-lg text-xs sm:text-base">
                {currentCard.command}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-2xs sm:text-sm mt-1 sm:mt-2 flip-back-text">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardDisplay;
