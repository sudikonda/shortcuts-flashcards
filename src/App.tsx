import React, { useState, useEffect, useRef } from 'react';
import CategorySelector from './components/CategorySelector';
import FlashcardDisplay from './components/FlashcardDisplay';
import ProgressControls from './components/ProgressControls';
import confetti from 'canvas-confetti';
import { Shuffle, RotateCcw, Check, X, BookOpen, Keyboard, Command } from 'lucide-react';
import { ideaVimCommands } from './ideaVimCommands';
import { leaderKeyCommands } from './leaderKeyCommands';
import { vimCommands } from './vimCommands';
import { vimiumCommands } from './vimiumCommands';

const allCommands = [...ideaVimCommands, ...leaderKeyCommands, ...vimCommands, ...vimiumCommands];

export interface Flashcard {
  id: number;
  parent: string;
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
  const [selectedCommandSet, setSelectedCommandSet] = useState<'all' | 'idea' | 'leader' | 'vim' | 'vimium'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let commands: Flashcard[];
    switch (selectedCommandSet) {
      case 'all':
        commands = allCommands;
        break;
      case 'idea':
        commands = ideaVimCommands;
        break;
      case 'leader':
        commands = leaderKeyCommands;
        break;
      case 'vim':
        commands = vimCommands;
        break;
      case 'vimium':
        commands = vimiumCommands;
        break;
      default:
        commands = allCommands;
    }
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
    setSelectedCommandSet(e.target.value as 'idea' | 'leader' | 'vim' | 'vimium');
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
        const duration = 100;
        const end = Date.now() + duration;

        (function frame() {
          confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: rect.left / window.innerWidth, y: rect.top / window.innerHeight },
          });
          confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: rect.left / window.innerWidth, y: rect.top / window.innerHeight },
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
          <CategorySelector
            selectedCommandSet={selectedCommandSet}
            selectedCategory={selectedCategory}
            categories={categories}
            handleCommandSetChange={handleCommandSetChange}
            handleCategoryChange={handleCategoryChange}
          />

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
          <FlashcardDisplay
            currentCard={currentCard}
            flipped={flipped}
            practiceMode={practiceMode}
            showAnswer={showAnswer}
            isCardKnown={isCardKnown}
            userInput={userInput}
            isCorrect={isCorrect}
            selectedCommandSet={selectedCommandSet}
            handleFlip={handleFlip}
            handleInputChange={handleInputChange}
            checkAnswer={checkAnswer}
            handleKeyDown={handleKeyDown}
            getInputFeedbackClass={getInputFeedbackClass}
            inputRef={inputRef}
          />
        ) : (
          <div className="text-center text-gray-600 py-12">
            No flashcards available for this category.
          </div>
        )}

        <ProgressControls
          currentCardIndex={currentCardIndex}
          filteredCardsLength={filteredCards.length}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />

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

      <div className="text-center mt-12 text-sm text-gray-500">
        <p>Total commands: {flashcards.length} | Known: {knownCards.length}</p>
      </div>
      <footer className="footer">sudikonda</footer>
    </div>
  );
}

export default App;
