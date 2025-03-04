import { Flashcard } from './App';

const vimCommands: Flashcard[] = [
  // Basic Navigation
  { id: 1, category: "Navigation", command: "h", description: "Move cursor left" },
  { id: 2, category: "Navigation", command: "j", description: "Move cursor down" },
  { id: 3, category: "Navigation", command: "k", description: "Move cursor up" },
  { id: 4, category: "Navigation", command: "l", description: "Move cursor right" },
  { id: 5, category: "Navigation", command: "w", description: "Move to the next word" },
  { id: 6, category: "Navigation", command: "b", description: "Move to the beginning of the word" },
  { id: 7, category: "Navigation", command: "0", description: "Move to the beginning of the line" },
  { id: 8, category: "Navigation", command: "$", description: "Move to the end of the line" },
  { id: 9, category: "Navigation", command: "gg", description: "Move to the beginning of the file" },
  { id: 10, category: "Navigation", command: "G", description: "Move to the end of the file" },

  // Editing
  { id: 11, category: "Editing", command: "i", description: "Insert before the cursor" },
  { id: 12, category: "Editing", command: "a", description: "Append after the cursor" },
  { id: 13, category: "Editing", command: "o", description: "Open a new line below the current line" },
  { id: 14, category: "Editing", command: "O", description: "Open a new line above the current line" },
  { id: 15, category: "Editing", command: "x", description: "Delete character under the cursor" },
  { id: 16, category: "Editing", command: "dd", description: "Delete the current line" },
  { id: 17, category: "Editing", command: "yy", description: "Yank (copy) the current line" },
  { id: 18, category: "Editing", command: "p", description: "Paste after the cursor" },
  { id: 19, category: "Editing", command: "P", description: "Paste before the cursor" },
  { id: 20, category: "Editing", command: "r", description: "Replace a single character" },
  { id: 21, category: "Editing", command: "cw", description: "Change word" },

  // Searching
  { id: 22, category: "Searching", command: "/", description: "Search forward" },
  { id: 23, category: "Searching", command: "?", description: "Search backward" },
  { id: 24, category: "Searching", command: "n", description: "Repeat search forward" },
  { id: 25, category: "Searching", command: "N", description: "Repeat search backward" },

  // Visual Mode
  { id: 26, category: "Visual Mode", command: "v", description: "Enter visual mode (character)" },
  { id: 27, category: "Visual Mode", command: "V", description: "Enter visual mode (line)" },
  { id: 28, category: "Visual Mode", command: "Ctrl+v", description: "Enter visual mode (block)" },
  { id: 29, category: "Visual Mode", command: "d", description: "Delete selection" },
  { id: 30, category: "Visual Mode", command: "y", description: "Yank (copy) selection" },

  // Saving and Exiting
  { id: 31, category: "Saving and Exiting", command: ":w", description: "Save the file" },
  { id: 32, category: "Saving and Exiting", command: ":q", description: "Quit Vim" },
  { id: 33, category: "Saving and Exiting", command: ":wq", description: "Save and quit" },
  { id: 34, category: "Saving and Exiting", command: ":q!", description: "Quit without saving" },
];

export { vimCommands };
