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
  selectedCommandSet: 'all' | 'idea' | 'leader' | 'vim' | 'vimium';
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
    <div className="animate-fadeIn">
      <div className={`perspective-1000 mb-8 ${isCardKnown(currentCard.id) ? 'ring-2 ring-success rounded-2xl' : 'ring-2 ring-fuchsia-400 rounded-2xl'}`}>
        <div className={`relative transition-transform duration-500 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
          <div className={`card bg-white dark:bg-gray-800 shadow-lg dark:shadow-none ${flipped ? 'hidden' : ''}`} onClick={handleFlip}>
            <div className="card-header">{currentCard.parent}</div>
            <div className="card-subheading">{currentCard.category}</div>

            {practiceMode ? (
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">What is the shortcut for:</h2>
                <div className="bg-indigo-50 p-6 rounded-xl mb-8 w-full">
                  <p className="text-xl text-indigo-900 text-center">{currentCard.description}</p>
                </div>

                <div className="w-full max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <input
                      ref={inputRef}
                      type="text"
                      value={userInput}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder="Type the shortcut..."
                      className={`input ${getInputFeedbackClass()}`}
                      autoFocus
                    />
                    <button
                      id="check-button"
                      onClick={checkAnswer}
                      className="btn btn-primary dark:text-gray-900 whitespace-nowrap"
                    >
                      Check
                    </button>
                  </div>

                  {isCorrect !== null && (
                    <div className={`p-4 rounded-xl mb-4 ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                      {isCorrect ? (
                        <p className="flex items-center text-success">
                          <Check size={18} className="mr-2" /> Correct! Well done.
                        </p>
                      ) : (
                        <div>
                          <p className="flex items-center text-danger mb-2">
                            <X size={18} className="mr-2" /> Not quite right. Try again or see the answer.
                          </p>
                          {showAnswer && (
                            <p className="font-mono bg-white px-3 py-2 rounded-lg">
                              Answer: {currentCard.command}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="text-sm text-gray-500">
                    {selectedCommandSet === 'idea' ? (
                      <p>Tip: For leader key, you can type "space" or " " (a space)</p>
                    ) : selectedCommandSet === 'leader' ? (
                      <p>Tip: Type the exact shortcut keys shown (e.g., "op" for Postman)</p>
                    ) : selectedCommandSet === 'vimium' ? (
                      <p>Tip: Type exact shortcut keys for command (e.g., "j" for Scroll down)</p>
                    ) : (
                      <p>Tip: Type the exact vim command (e.g., "i" for insert)</p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">{currentCard.command}</h2>
                {showAnswer && (
                  <p className="text-gray-600 dark:text-gray-300 italic">"{currentCard.description}"</p>
                )}
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">Click to flip</p>
              </div>
            )}
          </div>

          <div className={`card relative w-full inset-0 rotate-y-180 ${!flipped ? 'hidden' : ''}`} onClick={handleFlip}>
            <div className="card-header">{currentCard.category}</div>
            <div className="card-subheading">{currentCard.parent}</div>
            <div className="text-center">
              <p className="text-xl mb-4">{currentCard.description}</p>
              <div className="inline-block font-mono bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                {currentCard.command}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 flip-back-text">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardDisplay;
