import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Shuffle, ChevronLeft, ChevronRight, RotateCcw, Check, X, BookOpen, Keyboard, ChevronDown, Command } from 'lucide-react';
import { ideaVimCommands } from './ideaVimCommands';
import { leaderKeyCommands } from './leaderKeyCommands';

export interface Flashcard {
  id: number;
  category: string;
  command: string;
  description: string;
}

function App() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredCards, setFilteredCards] = useState<Flashcard[]>([]);
  const [knownCards, setKnownCards] = useState<number[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [practiceMode, setPracticeMode] = useState(true);
  const [selectedCommandSet, setSelectedCommandSet] = useState<'idea' | 'leader'>('idea');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const commands = selectedCommandSet === 'idea' ? ideaVimCommands : leaderKeyCommands;
    setFlashcards(commands);
    const uniqueCategories = Array.from(new Set(commands.map(card => card.category)));
    setCategories(uniqueCategories);
    setFilteredCards(commands);
    setCurrentCardIndex(0);
    setFlipped(false);
    setUserInput('');
    setIsCorrect(null);
  }, [selectedCommandSet]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredCards(flashcards);
    } else {
      const filtered = flashcards.filter(card => card.category === selectedCategory);
      setFilteredCards(filtered);
    }
    setCurrentCardIndex(0);
    setFlipped(false);
    setUserInput('');
    setIsCorrect(null);
  }, [selectedCategory, flashcards]);

  useEffect(() => {
    if (practiceMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentCardIndex, practiceMode]);

  const currentCard = filteredCards[currentCardIndex];

  const handleNext = () => {
    if (currentCardIndex < filteredCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setFlipped(false);
      setUserInput('');
      setIsCorrect(null);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setFlipped(false);
      setUserInput('');
      setIsCorrect(null);
    }
  };

  const handleFlip = () => {
    if (!practiceMode) {
      setFlipped(!flipped);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5);
    setFilteredCards(shuffled);
    setCurrentCardIndex(0);
    setFlipped(false);
    setUserInput('');
    setIsCorrect(null);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleCommandSetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCommandSet(e.target.value as 'idea' | 'leader');
  };

  const handleKnown = () => {
    if (currentCard) {
      setKnownCards([...knownCards, currentCard.id]);
      handleNext();
    }
  };

  const handleUnknown = () => {
    if (currentCard) {
      setKnownCards(knownCards.filter(id => id !== currentCard.id));
      handleNext();
    }
  };

  const toggleShowAnswers = () => {
    setShowAnswer(!showAnswer);
  };

  const togglePracticeMode = () => {
    setPracticeMode(!practiceMode);
    setFlipped(false);
    setUserInput('');
    setIsCorrect(null);
  };

  const isCardKnown = (id: number) => knownCards.includes(id);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const checkAnswer = () => {
    if (!currentCard) return;

    const normalizedInput = userInput.trim().toLowerCase();
    const normalizedCommand = currentCard.command.toLowerCase();
    const processedInput = normalizedInput.replace(/space/g, ' ').replace(/leader/g, '<leader>');
    const processedCommand = normalizedCommand.replace(/<leader>/g, ' ');

    const correct =
      processedInput === processedCommand ||
      normalizedInput === normalizedCommand ||
      processedInput.replace(/ /g, '') === processedCommand.replace(/<leader>/g, '').replace(/ /g, '');

    setIsCorrect(correct);

    if (correct) {
      const button = document.querySelector('#check-button');
      if (button) {
        const rect = button.getBoundingClientRect();
        const duration = 1000;
        const end = Date.now() + duration;

        (function frame() {
          confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: rect.left / window.innerWidth, y: rect.top / window.innerHeight }
          });
          confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: rect.left / window.innerWidth, y: rect.top / window.innerHeight }
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());
      }
      if (!isCardKnown(currentCard.id)) {
        setKnownCards([...knownCards, currentCard.id]);
      }
      setTimeout(handleNext, 1000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  const getInputFeedbackClass = () => {
    if (isCorrect === null) return '';
    return isCorrect ? 'input-success' : 'input-error';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center">
            <Command className="w-10 h-10 mr-3 text-primary" />
            Command Shortcuts Flashcards
          </h1>
          <p className="text-lg text-gray-600">Master your keyboard shortcuts with these flashcards</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-6 w-full sm:w-auto">
            <div className="select-container w-full sm:w-48">
              <select
                id="commandSet"
                value={selectedCommandSet}
                onChange={handleCommandSetChange}
                className="select"
              >
                <option value="idea">IdeaVim Commands</option>
                <option value="leader">LeaderKey Commands</option>
              </select>
              <ChevronDown className="select-icon w-5 h-5 text-gray-400" />
            </div>

            <div className="select-container w-full sm:w-48">
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="select"
              >
                <option value="All">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="select-icon w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button onClick={handleShuffle} className="btn btn-primary flex-1 sm:flex-none">
              <Shuffle size={18} /> Shuffle
            </button>
            <button onClick={toggleShowAnswers} className="btn btn-secondary flex-1 sm:flex-none">
              <BookOpen size={18} /> {showAnswer ? "Hide" : "Show"}
            </button>
            <button onClick={togglePracticeMode} className="btn btn-neutral flex-1 sm:flex-none">
              <Keyboard size={18} /> {practiceMode ? "View" : "Practice"}
            </button>
          </div>
        </div>

        {filteredCards.length > 0 && currentCard ? (
          <div className="animate-fadeIn">
            <div className={`perspective-1000 mb-8 ${isCardKnown(currentCard.id) ? 'ring-2 ring-success rounded-2xl' : ''}`}>
              <div className={`relative transition-transform duration-500 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
                <div className={`card ${flipped ? 'hidden' : ''}`} onClick={handleFlip}>
                  <div className="card-header">{currentCard.category}</div>

                  {practiceMode ? (
                    <div className="flex flex-col items-center">
                      <h2 className="text-2xl font-bold text-center mb-6">What is the shortcut for:</h2>
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
                            className="btn btn-primary whitespace-nowrap"
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
                          ) : (
                            <p>Tip: Type the exact shortcut keys shown (e.g., "op" for Postman)</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-4">{currentCard.command}</h2>
                      {showAnswer && (
                        <p className="text-gray-600 italic">"{currentCard.description}"</p>
                      )}
                      <p className="text-gray-500 text-sm mt-4">Click to flip</p>
                    </div>
                  )}
                </div>

                <div className={`card absolute inset-0 rotate-y-180 ${!flipped ? 'hidden' : ''}`} onClick={handleFlip}>
                  <div className="card-header">{currentCard.category}</div>
                  <div className="text-center">
                    <p className="text-xl mb-4">{currentCard.description}</p>
                    <div className="inline-block font-mono bg-gray-100 px-4 py-2 rounded-lg">
                      {currentCard.command}
                    </div>
                    <p className="text-gray-500 text-sm mt-4 flip-back-text">Click to flip back</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <button
                onClick={handlePrevious}
                disabled={currentCardIndex === 0}
                className={`btn ${currentCardIndex === 0 ? 'bg-gray-200 cursor-not-allowed' : 'btn-outline border-gray-200 text-gray-700'}`}
              >
                <ChevronLeft size={20} /> Previous
              </button>

              <span className="text-gray-600 font-medium">
                {currentCardIndex + 1} of {filteredCards.length}
              </span>

              <button
                onClick={handleNext}
                disabled={currentCardIndex === filteredCards.length - 1}
                className={`btn ${currentCardIndex === filteredCards.length - 1 ? 'bg-gray-200 cursor-not-allowed' : 'btn-outline border-gray-200 text-gray-700'}`}
              >
                Next <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex gap-4 justify-center">
              <button onClick={handleKnown} className="btn btn-success">
                <Check size={20} /> I know this
              </button>
              <button onClick={handleUnknown} className="btn btn-danger">
                <X size={20} /> Still learning
              </button>
              <button onClick={() => setKnownCards([])} className="btn btn-neutral">
                <RotateCcw size={20} /> Reset progress
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600 py-12">
            No flashcards available for this category.
          </div>
        )}

<div className="text-center mt-12 text-sm text-gray-500">
        <p>Total commands: {flashcards.length} | Known: {knownCards.length}</p>
      </div>
      <footer className="footer">sudikonda</footer>

      </div>
    </div>
  );
}

export default App;