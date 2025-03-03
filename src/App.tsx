import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Shuffle, ChevronLeft, ChevronRight, RotateCcw, Check, X, BookOpen, Keyboard } from 'lucide-react';

// Define the structure for our flashcards
interface Flashcard {
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
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize flashcards from the .vimrc file
  useEffect(() => {
    const vimCommands: Flashcard[] = [
      // Leader key
      { id: 1, category: "Basic", command: "Space", description: "Leader key" },
      
      // EasyMotion
      { id: 2, category: "Navigation", command: "<leader>e", description: "EasyMotion search backward" },
      { id: 3, category: "Navigation", command: "<leader>f", description: "EasyMotion search forward" },
      
      // Debug
      { id: 4, category: "Debug", command: "<leader>dd", description: "Start debugging" },
      { id: 5, category: "Debug", command: "<leader>ds", description: "Stop debugging" },
      { id: 6, category: "Debug", command: "<leader>db", description: "Toggle line breakpoint" },
      { id: 7, category: "Debug", command: "<leader>do", description: "Step over" },
      
      // Code
      { id: 8, category: "Code", command: "<leader>rn", description: "Rename element" },
      { id: 9, category: "Code", command: "<leader>z", description: "Toggle distraction free mode" },
      { id: 10, category: "Code", command: "<leader>oi", description: "Optimize imports" },
      { id: 11, category: "Code", command: "<leader>rf", description: "Reformat code" },
      { id: 12, category: "Code", command: "<leader>o", description: "File structure popup" },
      
      // Project
      { id: 13, category: "Project", command: "<leader>pv", description: "Select in project view" },
      
      // Git
      { id: 14, category: "Git", command: "<leader>h", description: "Show tabbed file history" },
      { id: 15, category: "Git", command: "<leader>a", description: "Annotate" },
      { id: 16, category: "Git", command: "<leader>cm", description: "Copilot git commit" },
      
      // Search
      { id: 17, category: "Search", command: "<leader>sc", description: "Go to class" },
      { id: 18, category: "Search", command: "<leader>sa", description: "Go to action" },
      { id: 19, category: "Search", command: "<leader>sf", description: "Go to file" },
      { id: 20, category: "Search", command: "<leader>gd", description: "Go to declaration" },
      { id: 21, category: "Search", command: "<S-Space>", description: "Go to next error" },
      
      // Window
      { id: 22, category: "Window", command: "<leader>hw", description: "Hide active window" },
      { id: 23, category: "Window", command: "<leader>hx", description: "Hide all windows" },
      { id: 24, category: "Window", command: "<leader>xx", description: "Close editor" },
      { id: 25, category: "Window", command: "<leader>xa", description: "Close all editors but active" },
      { id: 26, category: "Window", command: "<leader>wv", description: "Split vertically" },
      { id: 27, category: "Window", command: "<leader>wm", description: "Move editor to opposite tab group" },
      
      // Navigation
      { id: 28, category: "Navigation", command: "<leader><<", description: "Navigate back" },
      { id: 29, category: "Navigation", command: "<leader>>>", description: "Navigate forward" },
      { id: 30, category: "Navigation", command: "<leader>tab", description: "Recent files" },
      
      // Terminal
      { id: 31, category: "Terminal", command: "<leader>t", description: "Activate terminal tool window" },
      { id: 32, category: "Terminal", command: "gc", description: "Activate GitHub Copilot chat tool window" },
      
      // Other
      { id: 33, category: "Other", command: "H", description: "Move cursor left (remapped from h)" },
      { id: 34, category: "Other", command: "<leader>i", description: "Toggle case and start typing" },
      { id: 35, category: "Other", command: "v2l<leader>u", description: "Remove selection and toggle case" },
      { id: 36, category: "Other", command: "U", description: "Redo (remapped from Ctrl+R)" },
      
      // Plugins
      { id: 37, category: "Plugins", command: "<C-n>", description: "Select next occurrence (multiple cursors)" },
    ];
    
    setFlashcards(vimCommands);
    
    // Extract unique categories
    const uniqueCategories = Array.from(new Set(vimCommands.map(card => card.category)));
    setCategories(uniqueCategories);
    
    // Initialize filtered cards with all cards
    setFilteredCards(vimCommands);
  }, []);

  // Filter cards when category changes
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

  // Focus input when card changes
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
    
    // Normalize input and expected answer for comparison
    const normalizedInput = userInput.trim().toLowerCase();
    const normalizedCommand = currentCard.command.toLowerCase();
    
    // Handle special cases for leader key
    const processedInput = normalizedInput.replace(/space/g, ' ').replace(/leader/g, '<leader>');
    const processedCommand = normalizedCommand.replace(/<leader>/g, ' ');
    
    // Check if the answer is correct
    const correct = 
      processedInput === processedCommand || 
      normalizedInput === normalizedCommand ||
      processedInput.replace(/ /g, '') === processedCommand.replace(/<leader>/g, '').replace(/ /g, '');
    
    setIsCorrect(correct);
    
    if (correct) {
      // If correct, mark as known and move to next card after a delay
      const button = document.querySelector('#check-button');
      if (button) {
        const rect = button.getBoundingClientRect();
        const duration = 1 * 1000;
        const end = Date.now() + duration;

        (function frame() {
          // launch a few confetti and then recurse
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

          // keep going until we are out of time
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());
      }
      if (!isCardKnown(currentCard.id)) {
        setKnownCards([...knownCards, currentCard.id]);
      }
      setTimeout(() => {
        handleNext();
      }, 1000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  const getInputFeedbackClass = () => {
    if (isCorrect === null) return '';
    return isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Vim Shortcuts Flashcards</h1>
      <p className="text-gray-600 mb-8">Master your Vim commands with these flashcards</p>
      
      <div className="w-full max-w-3xl mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center">
          <label htmlFor="category" className="mr-2 text-gray-700">Category:</label>
          <select 
            id="category" 
            value={selectedCategory} 
            onChange={handleCategoryChange}
            className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div className="flex gap-2 flex-wrap justify-center">
          <button 
            onClick={handleShuffle} 
            className="flex items-center bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <Shuffle size={18} className="mr-1" /> Shuffle
          </button>
          <button 
            onClick={toggleShowAnswers} 
            className="flex items-center bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-700 transition"
          >
            <BookOpen size={18} className="mr-1" /> {showAnswer ? "Hide Answers" : "Show Answers"}
          </button>
          <button 
            onClick={togglePracticeMode} 
            className="flex items-center bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            <Keyboard size={18} className="mr-1" /> {practiceMode ? "View Mode" : "Practice Mode"}
          </button>
        </div>
      </div>
      
      {filteredCards.length > 0 && currentCard ? (
        <>
          <div 
            className={`w-full max-w-2xl perspective-1000 mb-6 ${isCardKnown(currentCard.id) ? 'border-green-500 border-2 rounded-xl' : ''}`}
          >
            <div className={`relative w-full transition-transform duration-500 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
              {/* Front of card */}
              <div 
                className={`w-full bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center backface-hidden ${flipped ? 'hidden' : ''}`}
                onClick={handleFlip}
              >
                <div className="absolute top-4 left-4 px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-md">
                  {currentCard.category}
                </div>
                
                {practiceMode ? (
                  <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center mb-6">What is the shortcut for:</h2>
                    <div className="bg-indigo-50 p-4 rounded-lg mb-6 w-full text-center">
                      <p className="text-xl text-indigo-800">{currentCard.description}</p>
                    </div>
                    
                    <div className="w-full max-w-md">
                      <div className="flex items-center mb-4">
                        <input
                          ref={inputRef}
                          type="text"
                          value={userInput}
                          onChange={handleInputChange}
                          onKeyDown={handleKeyDown}
                          placeholder="Type the shortcut..."
                          className={`w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-lg ${getInputFeedbackClass()}`}
                          autoFocus
                        />
                        <button
                          id="check-button"
                          onClick={checkAnswer}
                          className="ml-2 bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition"
                        >
                          Check
                        </button>
                      </div>
                      
                      {isCorrect !== null && (
                        <div className={`p-3 rounded-md mb-4 ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {isCorrect ? (
                            <p className="flex items-center">
                              <Check size={18} className="mr-2" /> Correct! Well done.
                            </p>
                          ) : (
                            <div>
                              <p className="flex items-center mb-1">
                                <X size={18} className="mr-2" /> Not quite right. Try again or see the answer.
                              </p>
                              {showAnswer && (
                                <p className="font-mono bg-white px-2 py-1 rounded mt-1">
                                  Answer: {currentCard.command}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="text-sm text-gray-500 mt-2">
                        <p>Tip: For leader key, you can type "space" or " " (a space)</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-center mb-4">{currentCard.command}</h2>
                    {showAnswer && (
                      <p className="text-gray-600 text-center italic">"{currentCard.description}"</p>
                    )}
                    <p className="text-gray-500 text-sm mt-4">Click to flip</p>
                  </>
                )}
              </div>
              
              {/* Back of card */}
              <div 
                className={`absolute w-full h-full bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center backface-hidden rotate-y-180 ${!flipped ? 'hidden' : ''}`}
                onClick={handleFlip}
              >
                <div className="absolute top-4 left-4 px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-md">
                  {currentCard.category}
                </div>
                <p className="text-xl text-center">{currentCard.description}</p>
                <div className="mt-4 text-gray-600 font-mono bg-gray-100 px-3 py-1 rounded">
                  {currentCard.command}
                </div>
                <p className="text-gray-500 text-sm mt-4">Click to flip back</p>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-2xl flex justify-between items-center mb-8">
            <button 
              onClick={handlePrevious} 
              disabled={currentCardIndex === 0}
              className={`flex items-center px-4 py-2 rounded-md ${currentCardIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              <ChevronLeft size={20} className="mr-1" /> Previous
            </button>
            
            <span className="text-gray-600">
              {currentCardIndex + 1} of {filteredCards.length}
            </span>
            
            <button 
              onClick={handleNext} 
              disabled={currentCardIndex === filteredCards.length - 1}
              className={`flex items-center px-4 py-2 rounded-md ${currentCardIndex === filteredCards.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Next <ChevronRight size={20} className="ml-1" />
            </button>
          </div>
          
          <div className="flex gap-4 flex-wrap justify-center">
            <button 
              onClick={handleKnown} 
              className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              <Check size={20} className="mr-2" /> I know this
            </button>
            <button 
              onClick={handleUnknown} 
              className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              <X size={20} className="mr-2" /> Still learning
            </button>
            <button 
              onClick={() => setKnownCards([])} 
              className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              <RotateCcw size={20} className="mr-2" /> Reset progress
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600">
          No flashcards available for this category.
        </div>
      )}
      
      <div className="mt-12 text-sm text-gray-500">
        <p>Total commands: {flashcards.length} | Known: {knownCards.length}</p>
      </div>
    </div>
  );
}

export default App;
